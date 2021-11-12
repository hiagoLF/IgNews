// Document é o arquivo que vai ser carregado apenas uma vez
// Vai fazer o mesmo papel do public/html do create-react-app
// Aqui o componente tem que ser funcional - Questões do próprio Next mesmo
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Main: Análogo ao root */}
          <Main />

          {/* NextScript: Código JavaScript  */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
