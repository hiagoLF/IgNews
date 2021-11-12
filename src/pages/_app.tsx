import { AppProps } from "next/dist/shared/lib/router/router";
import Header from "../components/Header";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
