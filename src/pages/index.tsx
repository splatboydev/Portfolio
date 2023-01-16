import Head from "next/head";
import Picture from "../components/Picture";
import Work from "../components/Work";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
const LayoutGroup = dynamic(() => import('framer-motion').then((mod) => mod.LayoutGroup), {ssr: false});
import { Partytown } from '@builder.io/partytown/react';

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <Partytown debug={false} forward={['dataLayer.push']} />
        <title>Splatboy Dev</title>
        <meta
          name="description"
          content="Splatboy Dev's Portfolio website."
        />
        <meta property="og:title" content="Splatboy Dev's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://splatboy-dev.xyz" />
        <meta property="og:description" content="Splatboy Dev's portfolio website, built with Next.js." />
        <meta property="description" content="Splatboy Dev's portfolio website, built with Next.js." />
        <meta name="theme-color" content="#FFF1"></meta>
        <link rel="icon" href="static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href="./splatboy-dev.webp" sizes="100%" />
      </Head>
      <LayoutGroup>
        {typeof window !== "undefined" && <DynamicNav />}
        <Picture />
        <Work />
        <Tools />
        <Contact />
      </LayoutGroup>
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
