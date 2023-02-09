import type { NextPage } from "next";
import Head from "next/head";
import {Londrina_Solid} from '@next/font/google';
import clsx from "clsx";

const londrinaSolid = Londrina_Solid({
  subsets: ['latin'],
  variable: '--font-londrina-solid',
  weight: ['100', '300', '400', '900']
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lil Nouncil</title>
        <meta name="description" content="Council of Lil Nouns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={clsx(londrinaSolid.variable, "flex h-screen justify-center items-center font-sans")}>
        <div className="m-auto">
          <h1 className="text-3xl">Lil Nouncil</h1>
          <p className="text-xl">We are building something!</p>
        </div>
      </main>
    </>
  );
};

export default Home;
