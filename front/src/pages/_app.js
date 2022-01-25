import axios from "axios";
import React from "react";
import { RecoilRoot } from "recoil";
import { SnackbarProvider } from "notistack";

import "/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = "http://localhost:8080";
  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3} preventDuplicate autoHideDuration={3000}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap"
          />
        </Head>
        <Component {...pageProps} />
      </SnackbarProvider>
    </RecoilRoot>
  );
}

export default MyApp;
