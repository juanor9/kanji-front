import { GET_RANDOM_CHARACTER } from '@/app/graphql/characters';
import { useQuery } from '@apollo/client';
import KanjiSimpleCard from '../KanjiSimpleCard/KanjiSimpleCard';
import KanjiSimplierCard from '../KanjiSimplierCard/KanjiSimplierCard';

const RandomCharacter = ({jlpt, card}) => {
  const { loading, error, data } = useQuery(GET_RANDOM_CHARACTER, {
    variables: {jlpt}
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const kanji = data.getRandomCharacter;

  if (card === 'simpleCard'){
    return(
      <KanjiSimpleCard
      literal = {kanji.literal}
      readings = {kanji.readings}
      meanings = {kanji.meanings}
      jlpt = {jlpt}
       />
  );
  }
  if (card === 'simplierCard'){
    return(
      <KanjiSimplierCard
      literal = {kanji.literal}
      readings = {kanji.readings}
      meanings = {kanji.meanings}
      jlpt = {jlpt}
       />
  );
  }


};

export default RandomCharacter;
