import { gql } from '@apollo/client';

export const GET_RADICALS_BY_ID = gql`
query GetRadicalById($getRadicalByIdId: Int!) {
  getRadicalById(id: $getRadicalByIdId) {
    id
    literal
    meaningES
  }
}
`;
