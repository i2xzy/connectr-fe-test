import React from 'react';
import numeral from 'numeral';

import {
  Wrapper,
  Name,
  Class,
  Category,
  CategoryName,
  Value,
} from './Card.styled';

interface Props {
  selectedCategory?: string;
  handleClick?: (name: string) => void;
  name: string;
  starshipClass: string;
  maxAtmospheringSpeed: number;
  costInCredits: number;
  passengers: number;
  filmsFeaturedIn: number;
}

const Game = ({
  selectedCategory,
  handleClick,
  name,
  starshipClass,
  maxAtmospheringSpeed,
  costInCredits,
  passengers,
  filmsFeaturedIn,
}: Props) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Class>{starshipClass}</Class>
      <Category
        isSelected={selectedCategory === 'maxAtmospheringSpeed'}
        isClickable={!!handleClick && !selectedCategory}
        onClick={() => handleClick?.('maxAtmospheringSpeed')}
      >
        <CategoryName>Max Speed:</CategoryName>
        <Value>{numeral(maxAtmospheringSpeed).format('0,0')}</Value>
      </Category>
      <Category
        isSelected={selectedCategory === 'costInCredits'}
        isClickable={!!handleClick && !selectedCategory}
        onClick={() => handleClick?.('costInCredits')}
      >
        <CategoryName>Cost in credits:</CategoryName>
        <Value>{numeral(costInCredits).format('0,0 a')}</Value>
      </Category>
      <Category
        isSelected={selectedCategory === 'passengers'}
        isClickable={!!handleClick && !selectedCategory}
        onClick={() => handleClick?.('passengers')}
      >
        <CategoryName>Passengers:</CategoryName>
        <Value>{numeral(passengers).format('0,0')}</Value>
      </Category>
      <Category
        isSelected={selectedCategory === 'filmConnection.totalCount'}
        isClickable={!!handleClick && !selectedCategory}
        onClick={() => handleClick?.('filmConnection.totalCount')}
      >
        <CategoryName>Films featured in:</CategoryName>
        <Value>{filmsFeaturedIn}</Value>
      </Category>
    </Wrapper>
  );
};

export default Game;
