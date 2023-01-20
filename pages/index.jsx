import React, { useState, useEffect } from "react";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import ActivityListItem from '../src/components/activity/ActivityListItem'

const baseUrl = process.env.apiUrl

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";


export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [users, setUsers] = useState([]);
  
  // useEffect(() => {
  //   setFeaturedCards(dataTrending);
  //   setTrendingItems(dataFeatured);
  //   setNfts(dataNfts);
  //   setCollectors(dataUsers)
  // }, []);


  useEffect(async () => {
    const result = await fetch(`https://nft-auction.herokuapp.com/featured`)
    const response =  await result.json()
  //  setNfts(response.nfts)
    console.log(response.nfts);
    
    response.nfts[0].rows = 2;
    response.nfts[0].cols = 3;
    setFeaturedCards(response.nfts);
  }, []);

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} />
      <TopCollectors collectors={collectors}/>
      <How />
      <Auctions cards={auctions}/>
      <Footer />
    </>
  );
}