import { AppProps } from "next/app";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
