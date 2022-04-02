import Head from "next/head";

import { Navbar } from "../Navbar/index";
import { Footer } from "../Footer/index";

import { Alert } from "../../components/Alert/index";

const Section = ({ title, component }) => {
  return (
    <div className="container">
      <Head>
        <title>{title ? `${title} | Shooperr` : "Shooperr"} </title>
        <meta name="description" content="Shooperr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <Navbar />
        </div>

        <div>{component}</div>

        <Footer />

        <Alert />
      </main>
    </div>
  );
};

export default Section;
