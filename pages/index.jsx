import Head from 'next/head';
import TopHeader from '@/app/components/TopHeader/TopHeader';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../app/graphql/characters';

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Página de inicio de la aplicación construida con Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <div>
      <h1>Kanji Characters</h1>
      <ul>
        {data.getAllCharacters.map((character) => (
          <li key={character.id}>
            {character.literal} - Grade: {character.misc.grade}, Strokes: {character.misc.stroke_count}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
