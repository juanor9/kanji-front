import Head from 'next/head';
import TopHeader from '@/app/components/TopHeader/TopHeader';
import RandomCharacter from '@/app/components/RandomCharacter/RandomCharacter';
import RandomKanjiByJLPT from '@/app/components/RandomCharaterByJLPT/RandomCharacterByJLPT';
import '@/app/styles/home.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Página de inicio de la aplicación construida con Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <main className='home__container'>
      <div>
      <h2>Kanji aleatorio</h2>
      <RandomCharacter
      card='simpleCard'
      />
      </div>
      <div>
      <h2>Kanji aleatorio por nivel</h2>
      <RandomKanjiByJLPT />
      </div>
      </main>
    </div>
  );
}
