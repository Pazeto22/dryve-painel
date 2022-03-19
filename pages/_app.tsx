import { AppProps } from "next/app";
// Dynamic para desativar SSR durante desenvolvimento
import dynamic from "next/dynamic";
import React from "react";
import "../styles/globals.scss";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// Dynamic para desativar SSR durante desenvolvimento
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
