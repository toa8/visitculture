import React from "react";
import Head from "next/head";

// Components
import WelcomeComp from "@/components/home_page_components/WelcomeComp";
import ArticlesComp from "@/components/home_page_components/ArticlesComp";
import BlogComp from "@/components/home_page_components/BlogComp";
import NewsComp from "@/components/home_page_components/NewsComp";
import Contact from "@/components/home_page_components/ContactComp";

import { url } from "@/environment/url";

export default function Home({ articles, news }) {
  return (
    <>
      <Head>
        <title>visitculture.com</title>
        <link rel="icon" href="/visitcultureicon.jpeg" />
        <meta
          name="description"
          content="Your inspiring guide to accompany cultural journeys!"
        />
        <meta
          name="keywords"
          content="travel,travel,trip,countries,vacation,article,news,culture"
        ></meta>
      </Head>
      <WelcomeComp />
      <ArticlesComp articles={articles} />
      <BlogComp />
      <NewsComp news={news} />
      <Contact />
    </>
  );
}

export const getServerSideProps = async () => {
  const getArticles = await fetch(
    `${url}/api/articles?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const articles = await getArticles.json();

  const getNews = await fetch(
    `${url}/api/news?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const news = await getNews.json();

  return {
    props: {
      articles,
      news,
    },
  };
};
