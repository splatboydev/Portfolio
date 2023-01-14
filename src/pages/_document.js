import Document, { Html, Head, Main, NextScript } from 'next/document';
import "../../public/arc-sw.js";

class PortfolioDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link
           href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon.ico"></link>
          <script async src="https://arc.io/widget.min.js#dPRGqGD4"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PortfolioDocument