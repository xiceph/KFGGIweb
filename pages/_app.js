import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router"; 
//import Layout from "@components/layout";
import Header from "@components/header";
import Breadcrumbs from "@components/breadcrumbs";
import Footer from "@components/footer";

import "../css/index.css";
import pages from "../data/pages";

const config = require('../next.config');

const text = {
  sk: {
    name: "Katedra fyzickej geografie a geoinformatiky",
    desc: "Katedra fyzickej geografie a geoinformatiky, Prírodovedecká fakulta, Univerzita Komenského v Bratislave"
  },
  en: {
    name: "Department of Physical Geography and Geoinformatics",
    desc: "Department of Physical Geography and Geoinformatics, Faculty of Natural Sciences, Comenius University in Bratislava"
  }
}


function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  const locale = router.asPath.slice(0,3) == "/en" ? "en" : "sk"
  const isBase = router.pathname == "/en" || router.pathname == "/" || router.pathname == "/404";
  const regex = /^(\/en\/|\/)(.+)\/.+/g;
  const match = [...router.asPath.matchAll(regex)][0];
  const page = match && match[2];
  
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  
  const locPages = pages[locale];
  const actPage = locPages.find( item => item.id == page );
  
  pageProps.locale = locale;
  pageProps.pages = locPages;
  
  return (
    <>
      <Head>
        <title>{text[locale].name}</title>
        <meta
          name="Description"
          content={text[locale].desc}
        />
        <base href={(config.basePath || '') + '/'} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      
      <div className="flex flex-col items-stretch min-h-screen font-serif text-base">
        <Header locale={ locale } pages={ locPages } actPage={ actPage } />
        {
          isBase 
          ? (
            <main className="max-w-screen-xl self-center flex-grow prose md:prose-md lg:prose-lg p-4 mt-22 lg:mt-24 md:p-6">
              <Component { ...pageProps } />
            </main>
          )
          : (
            <>
              <div className="flex-grow">
                <div className="mx-auto max-w-4xl mt-20 lg:mt-24 p-4 md:p-6 py-6 md:py-8">
                 <Breadcrumbs pages={ locPages } />
                </div>
                <main className="mx-auto max-w-4xl prose md:prose-md lg:prose-lg px-4 md:px-6 pt-2 md:pt-3 pb-6  md:pb-8">
                  <Component { ...pageProps } />
                </main>
              </div>
            </>
          )
        }
        
        <Footer locale={ locale }/>
      </div>
    </>
  );
}

export default MyApp;
