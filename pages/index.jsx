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
  const [auctionFilters, setAuctionFilters] = useState([])
  const [filterValue, setFilterValue] = useState() 
  const [topCollectorsValue, setTopCollectorsValue] = useState()
  const [priceRange, setPriceRange] = useState();


  const handleThisWeekChange = (event) => {
    setFilterValue(event.target.value)    
  }

  const handleSortByChange = (event) => {
    setTopCollectorsValue(event.target.value)    
  }

  const handlePriceRangeByChange = (event) => {
    setPriceRange(event.target.value)
    console.log(priceRange);
    
  }

  

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
    const response = await result.json()

    setCollectors(response.users)
    setCollectorFilters(response.filters)
    
 
  }, []);

  useEffect(async () => {
    const result = await fetch(`https://nft-auction.herokuapp.com/live-auctions`)
    const response =  await result.json()
    setAuctions(response.nfts)
     setAuctionFilters(response.filters)
  }, []);

  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/trending?sort=${filterValue}`)
    const response =  await result.json()
    setTrendingItems(response.nfts)
  }, [filterValue])

  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/top-collectors?sort=${topCollectorsValue}`)
    const response =  await result.json() 
    setCollectors(response.users)
  }, [topCollectorsValue])

  useEffect(async () => {
    const result = await fetch(`https://project-4-api.boom.dev/live-auctions?sort=${priceRange}`)
    const response =  await result.json()
    setAuctions(response.nfts)
  }, [priceRange]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} filters={trendingFilters} handleThisWeekChange={handleThisWeekChange}/>
      <TopCollectors collectors={collectors} filters={collectorFilters} handleSortByChange={handleSortByChange}/>
      <How />
      <Auctions cards={auctions} filters={auctionFilters} handlePriceRangeByChange={handlePriceRangeByChange}/>
      <Footer />
    </div>
  );
}