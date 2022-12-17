import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "BlockEstate",
  description: "A decentralized and modern blockchain application to implement real estate",
};
