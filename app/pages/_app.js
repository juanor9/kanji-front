import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';  // Asegúrate de que la ruta a tu cliente Apollo es correcta
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;