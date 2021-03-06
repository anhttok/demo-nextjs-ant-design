import React from "react";
import Head from "next/head";

import LayoutDefault from "@/layouts/default";

import 'antd/dist/antd.css'
import "@/assets/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="shortcut icon"
          href='/favicon.ico'
        />
        <title>Demo NextJS-AntDesign</title>
      </Head>
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </React.Fragment>
  );
}

export default MyApp
