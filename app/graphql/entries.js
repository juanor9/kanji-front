import { gql } from '@apollo/client';

export const GET_ENTRIES_BY_KANJI = gql`
query GetEntriesByKanjiWriting($writing: String!, $language: String) {
  getEntriesByKanjiWriting(writing: $writing, language: $language) {
    kanji {
      writing
    }
    kana {
      reading
    }
    meanings {
      meaning {
        language
        word
      }
    }
  }
}
`;
