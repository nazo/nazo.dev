import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import Script from "next/script";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-VF0NMPGT9C"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VF0NMPGT9C');
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
