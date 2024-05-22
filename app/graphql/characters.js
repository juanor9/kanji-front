import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
query GetAllCharacters {
  getAllCharacters {
    _id
    literal
    radicals {
      radType
      code
    }
    readings {
      kunyomi
      onyomi
      nanori
    }
    meanings {
      language
      meaning
    }
    grade
    strokes
    jlpt
    freq
    variant {
      varType
      varCode
    }
    dictionaries {
      dictionaryName
      code
    }
    queryCodes {
      queryType
      qCode
    }
    codepoints {
      cpType
      code
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
