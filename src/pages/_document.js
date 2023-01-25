import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link async
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            as="style"
          />
          <link async
           href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
            as='style'
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <Script async src="https://arc.io/widget.min.js#dPRGqGD4" />
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