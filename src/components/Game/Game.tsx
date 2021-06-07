import React, { useState, useEffect, useCallback } from 'react';
import * as _ from 'lodash';
import { useQuery } from '@apollo/client';
import Card from '../Card';
import GET_STARSHIPS from './graphql/get-starships';
import {
  Wrapper,
  Grid,
  Box,
  Header,
  Heading,
  Round,
  Message,
  Text,
  Button,
} from './Game.styled';

type CardType = {
  name: string;
  starshipClass: string;
  maxAtmospheringSpeed: number;
  costInCredits: number;
  passengers: number;
  filmConnection: { totalCount: number };
};

enum Status {
  READY,
  ROUND_OVER,
  GAME_OVER,
}

const Game = () => {
  const [status, setStatus] = useState(Status.READY);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [message, setMessage] = useState('');

  const [cards, setCards] = useState<CardType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const { loading } = useQuery(GET_STARSHIPS, {
    onCompleted: res =>
      setCards(_.shuffle(_.map(res.allStarships.edges, ({ node }) => node))),
  });

  const half = Math.floor(cards.length / 2);
  const playerCards = cards.slice(0, half);
  const botCards = cards.slice(half, cards.length);

  const handleClick = (slug: string) => {
    setSelectedCategory(slug);
  };

  const resetGame = () => {
    setCards(_.shuffle(cards));
    setRound(0);
    setScore(0);
    setBotScore(0);
    setStatus(Status.READY);
  };

  const setScores = useCallback(() => {
    const playerCategory = Number(_.get(playerCards[round], selectedCategory));
    const botCategory = Number(_.get(botCards[round], selectedCategory));
    if (playerCategory > botCategory) {
      setScore(score + 1);
      setMessage('You win!');
    } else if (botCategory > playerCategory) {
      setBotScore(botScore + 1);
      setMessage('You lose!');
    } else {
      setMessage('Draw!');
    }
    setStatus(Status.ROUND_OVER);
  }, [botCards, botScore, playerCards, round, score, selectedCategory]);

  useEffect(() => {
    if (status === Status.ROUND_OVER) {
      let timer = setTimeout(() => {
        setMessage('');
        setSelectedCategory('');
        if (round + 1 === half) {
          setStatus(Status.GAME_OVER);
        } else {
          setRound(round + 1);
          setStatus(Status.READY);
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
    if (selectedCategory) {
      let timer = setTimeout(() => {
        setScores();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [selectedCategory, round, setScores, half, status]);

  return (
    <Wrapper>
      <Grid>
        <Header>
          <Heading>Top Ships</Heading>
          <Round>{`Round: ${round + 1}`}</Round>
          <Text>{`Your Score: ${score}`}</Text>
          <Text>{`Opponent Score: ${botScore}`}</Text>
        </Header>
        {(loading || !cards.length) && <Message>Loading...</Message>}
        {status === Status.GAME_OVER && (
          <Message>
            <Text>Game Over!</Text>
            <Text>
              {score > botScore && 'You won the game'}
              {score < botScore && 'Opponent won the game!'}
              {score === botScore && 'Game ended in a Tie!'}
            </Text>
            <Button onClick={resetGame}>Play Again</Button>
          </Message>
        )}
        {status === Status.ROUND_OVER && <Message>{message}</Message>}

        {!!cards.length && status === Status.READY && (
          <>
            <Card
              selectedCategory={selectedCategory}
              handleClick={handleClick}
              name={playerCards[round].name}
              starshipClass={playerCards[round].starshipClass}
              maxAtmospheringSpeed={playerCards[round].maxAtmospheringSpeed}
              costInCredits={playerCards[round].costInCredits}
              passengers={playerCards[round].passengers}
              filmsFeaturedIn={playerCards[round].filmConnection.totalCount}
            />
            {selectedCategory ? (
              <Card
                selectedCategory={selectedCategory}
                name={botCards[round].name}
                starshipClass={botCards[round].starshipClass}
                maxAtmospheringSpeed={botCards[round].maxAtmospheringSpeed}
                costInCredits={botCards[round].costInCredits}
                passengers={botCards[round].passengers}
                filmsFeaturedIn={botCards[round].filmConnection.totalCount}
              />
            ) : (
              <Box>Choose a category</Box>
            )}
          </>
        )}
      </Grid>
    </Wrapper>
  );
};

export default Game;
