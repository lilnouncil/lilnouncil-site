import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lil Nouncil</title>
        <meta name="description" content="Council of Lil Nouns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen justify-center items-center">
        <div className="m-auto">
          <h1 className="text-3xl">Lil Nouncil</h1>
          <p className="text-xl">We are building something!</p>
        </div>
      </main>
    </>
  );
};

export default Home;
