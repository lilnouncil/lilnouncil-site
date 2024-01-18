import type {NextPage} from "next";
import Head from "next/head";
import {Layout} from "../components/layout";
import {Header} from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lil Nouncil</title>
        <meta name="description"
              content="A council of Nounish builders working within the framework of Lil Nouns DAO to proliferate CC0 and nounish culture."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Layout>
        <Header/>
      </Layout>
    </>
  );
};


export default Home;
