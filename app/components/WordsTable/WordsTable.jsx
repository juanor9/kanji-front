import { useQuery } from "@apollo/client";
import { GET_ENTRIES_BY_KANJI } from "@/app/graphql/entries";

const WordsTable = ({ kanji }) => {
  const { loading, error, data } = useQuery(GET_ENTRIES_BY_KANJI, {
    variables: {
      writing: kanji,
      language: "spa"
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const wordsList = data?.getEntriesByKanjiWriting;

  return (
    <section>
      <h2>Palabras</h2>
      <table>
        <thead>
          <tr>
            <th>Kanji</th>
            <th>Kana</th>
            <th>Español</th>
          </tr>
        </thead>
        <tbody>
          {wordsList.map((word) => (
            <tr key={word.kanji[0].writing}>
              <td lang="ja">{word.kanji[0].writing}</td>
              <td lang="ja">{word.kana[0].reading}</td>
              <td>{word.meanings[0].meaning[0].word}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WordsTable;
