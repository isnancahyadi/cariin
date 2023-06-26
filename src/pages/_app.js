import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/_define.scss";

import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import Script from "next/script";
import axios from "axios";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { getCookie } from "cookies-next";
import { PersistGate } from "redux-persist/integration/react";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  axios.interceptors.request.use(
    (config) => {
      if (getCookie(process.env.NEXT_PUBLIC_TOKEN_NAME)) {
        config.headers["Authorization"] = `Bearer ${getCookie(
          process.env.NEXT_PUBLIC_TOKEN_NAME
        )}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-C813K46L64"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C813K46L64', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
