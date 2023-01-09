import React from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import nftsInfo from '../../../data/nfts.json'

export default function Product() {
  const router = useRouter();
  const { id } = router.query

  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(nftsInfo[id]);
  }, []);

  return (
    <div>
      <Header />
      <ProductContainer name={product?.name} owner={product?.owner} price={product?.price} currency={product?.currency} likes={product?.likes} auction_end={product?.auction_end} details={product?.details} source={product?.source} bids={product?.bids} />
      <Footer />
    </div>
  );
}