import Home from "./Home";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dryve | Em Construção</title>
      </Head>
      <Home />
    </>
  );
}
