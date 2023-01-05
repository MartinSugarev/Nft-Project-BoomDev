import React, {useState, useEffect} from 'react'
import TopCollectors from "../src/components/collectors/TopCollectors";
import Header from '../src/components/header/Header';
import Featured from '../src/components/featured/Featured';
import Trending from '../src/components/trending/Trending';
import How from '../src/components/how/How';
import Auctions from '../src/components/auctions/Auctions';
import Footer from '../src/components/footer/Footer';
import lodash from 'lodash';

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";
import dataProfile from "../data/profile.json";
import ProductInfoTimer from '../src/components/product/ProductInfoTimer';

export default function Index() {
 

  const [featuredCards, setFeaturedCards] = useState([]);
  const [trending, setTrending] = useState([]);
  const [users, setUsers] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [profile, setProfile] = useState([]);

useEffect(() => {
    setFeaturedCards(dataFeatured);
    setTrending(dataTrending);
    setUsers(dataUsers);
    setNfts(dataNfts);
    setProfile(dataProfile);
}, []);


  return (
    // <>
    //   <Header />
    //   <Featured  items={featuredCards}/>
    //   <Trending cards={trending}/>
    //   <TopCollectors collectors={users}/>
    //   <How />
    //   <Auctions  cards={nfts}/>
    //   <Footer />
    // </>
    <ProductInfoTimer  />
  )
}
