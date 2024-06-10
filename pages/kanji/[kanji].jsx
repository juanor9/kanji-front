import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_LITERAL } from "@/app/graphql/characters";
import Head from "next/head";
import TopHeader from "@/app/components/TopHeader/TopHeader";
import WordsTable from "@/app/components/WordsTable/WordsTable";

const KanjiPage = () => {
  const { kanji } = useRouter().query;
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_LITERAL, {
    variables: {
      literal: kanji,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log('data: ', data);
  const { meanings, jlpt, grade, readings, strokes } = data?.getCharacterByLiteral;

  let meaningsEs = [];
  if (meanings && Array.isArray(meanings)) {
    meaningsEs = meanings.filter((meaning) => meaning.language === "es");
  }
  return (
    <div>
      <Head>
        <title>Kanjipedia | {String(kanji)} </title>
        <meta
          name="description"
          content="Página de inicio de la aplicación construida con Next.js"
        />
      </Head>
      <TopHeader />
      <main>
        <h1 lang="ja">{kanji}</h1>
        {jlpt || grade || strokes ? (
          <section>
            {jlpt ? (
              <p>
                <b>Nivel de JLPT: </b> N{jlpt}{" "}
              </p>
            ) : null}

            {grade ? (
              <p>
                <b>Grado escolar: </b> {grade} año
              </p>
            ) : null}
            {strokes ? (
              <p>
                <b>Número de trazos: </b> {strokes[0]}
              </p>
            ) : null}
          </section>
        ) : null}
        {readings.kunyomi || readings.onyomi || readings.nanori ? (
          <section>
            <h2>Lecturas</h2>
            {readings.kunyomi && readings.kunyomi.length > 0 ? (
              <article>
                <h3>Kunyomi</h3>
                <ul>
                  {readings.kunyomi.map((kunyomi) => (
                    <li key={kunyomi} lang="ja">
                      {kunyomi}
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
            {readings.onyomi && readings.onyomi.length > 0 ? (
              <article>
                <h3>Onyomi</h3>
                <ul>
                  {readings.onyomi.map((onyomi) => (
                    <li key={onyomi} lang="ja">
                      {onyomi}
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
            {readings.nanori && readings.nanori.length > 0 ? (
              <article>
                <h3>Nanori</h3>
                <ul>
                  {readings.nanori.map((nanori) => (
                    <li key={nanori} lang="ja">
                      {nanori}
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
          </section>
        ) : null}
        {meaningsEs && meaningsEs.length > 0 ? (
          <section>
            <h2>Significados</h2>
            <article>
              <ul>
                {meaningsEs.map((meaning) => (
                  <li key={meaning.meaning}>{meaning.meaning}</li>
                ))}
              </ul>
            </article>
          </section>
        ) : null}
        <WordsTable
        kanji = {kanji}
        />
      </main>
    </div>
  );
};

export default KanjiPage;
