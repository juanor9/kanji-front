import { ApolloProvider } from '@apollo/client';
import client from '../app/lib/apollo';
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;