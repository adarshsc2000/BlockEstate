import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate Blockchain App </title>
        <meta name="description" content="A decentralized and modern blockchain application based on real estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />      
    </div>
  );
}
