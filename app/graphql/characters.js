import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
query GetAllCharacters {
  getAllCharacters {
    literal
  }
}
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    getCharacterById(id: $id) {
      literal
      misc {
        grade
        stroke_count
      }
    }
  }
`;

export const GET_RANDOM_CHARACTER = gql`
query GetRandomCharacter($jlpt: Int) {
  getRandomCharacter(jlpt: $jlpt) {
    literal
    readings {
      kunyomi
      nanori
      onyomi
    }
    meanings {
      language
      meaning
    }
    jlpt
  }
}
`;
