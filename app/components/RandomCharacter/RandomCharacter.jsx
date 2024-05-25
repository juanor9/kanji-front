import { GET_RANDOM_CHARACTER } from '@/app/graphql/characters';
import { useQuery } from '@apollo/client';
import KanjiSimpleCard from '../KanjiSimpleCard/KanjiSimpleCard';

const RandomCharacter = () => {
  const { loading, error, data } = useQuery(GET_RANDOM_CHARACTER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const kanji = data.getRandomCharacter;
  return(
    <section>
      <h2>Kanji aleatorio</h2>
      <KanjiSimpleCard
      literal = {kanji.literal}
      readings = {kanji.readings}
      meanings = {kanji.meanings}
       />
    </section>
  );

};

export default RandomCharacter;
