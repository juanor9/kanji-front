import { ApolloProvider } from '@apollo/client';
import client from '@/app/lib/apollo';
import '@/app/styles/_normalize.scss';
import '@/app/styles/_globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;