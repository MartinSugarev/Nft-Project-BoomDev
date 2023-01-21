import React, { useState, useEffect } from "react";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";


const baseUrl = process.env.apiUrl



export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([])
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([])
  const [auctions, setAuctions] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [users, setUsers] = useState([]);
  

  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/featured`)
    const response =  await result.json()
    response.nfts[0].rows = 2;
    response.nfts[0].cols = 3;
    setFeaturedCards(response.nfts);
  }, []);

  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/trending`)
    const response =  await result.json()
    setTrendingItems(response.nfts)
    setTrendingFilters(response.filters)
  }, []);

  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/top-collectors`)
    const response =  await result.json()
    console.log(response);
    setCollectors(response.users)
    setCollectorFilters(response.filters)
  }, []);

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} trendingFilters={trendingFilters} />
      <TopCollectors collectors={collectors} collectorFilters={collectorFilters}/>
      <How />
      <Auctions cards={auctions}/>
      <Footer />
    </>
  );
}