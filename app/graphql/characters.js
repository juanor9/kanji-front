import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    getAllCharacters {
      id
      literal
      misc {
        grade
        stroke_count
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    getCharacterById(id: $id) {
      id
      literal
      misc {
        grade
        stroke_count
      }
    }
  }
`;
