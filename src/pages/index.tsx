import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import SubscribeBbutton from "../components/SubscribeBbutton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>

          <p>
            Get access to all the publications <br />
            <span>for {product.amount}/month</span>
          </p>
          <SubscribeBbutton/>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  );
}

// getStaticProps -> Propriedades estáticas -> Será executado apenas uma vez ou de tempos em tempos
// getServerSideProps -> Propriedades que mudam
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JvK7CBk2FNv3Pzei8jOBjRo");

  const product = {
    priceId: price.id,
    // O preço vem em centavos, por isso dividir por 100
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    // revalidate --> De quanto em quanto tempo getStaticProps será re executado
    revalidate: 60 * 60 * 24 // 24h
  };
};
