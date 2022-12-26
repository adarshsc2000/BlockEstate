// adding bootstrap
// import "bootstrap/dist/css/bootstrap.css";

// custom css
import "../styles/globals.scss";

import { MoralisProvider } from "react-moralis";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/39497/blockestate/v0.0.3"
})

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </MoralisProvider>
  );
}

export default MyApp;
