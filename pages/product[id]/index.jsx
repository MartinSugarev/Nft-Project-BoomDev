import React from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import nftsInfo from '../../data/nfts.json'

export default function Product() {
  const router = useRouter();

  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(nftsInfo);
  }, []);

  return (
    <div>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}