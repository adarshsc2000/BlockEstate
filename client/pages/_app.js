// adding bootstrap
// import "bootstrap/dist/css/bootstrap.css";

// custom css
import "../styles/globals.scss";


import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
