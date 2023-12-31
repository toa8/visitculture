// Global Css
import "@/styles/globals.css";
// Layouts
import Layout from "../Layouts/Layout";
import { useRouter } from "next/router";

import React from "react";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === "/_error") {
    return <Component {...pageProps} />;
  } else {
    return (
      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_KEY}`}
        />

        <Script strategy="lazyOnload" id="gtag">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GTAG_KEY}');
          `}
        </Script>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
