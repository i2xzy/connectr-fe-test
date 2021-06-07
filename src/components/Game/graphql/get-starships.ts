import { gql } from '@apollo/client';

const GET_STARSHIPS = gql`
  query getStarships {
    allStarships {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          starshipClass
          maxAtmospheringSpeed
          costInCredits
          passengers
          filmConnection {
            totalCount
          }
        }
      }
    }
  }
`;

export default GET_STARSHIPS;
