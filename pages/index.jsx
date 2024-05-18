import Head from 'next/head';
import TopHeader from '@/app/components/TopHeader/TopHeader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Página de inicio de la aplicación construida con Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
    </div>
  );
}