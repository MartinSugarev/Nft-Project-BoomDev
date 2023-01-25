import React from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Index() {
  const router = useRouter();
  const { id } = router.query

  const [product, setProduct] = useState();

  useEffect(async () => {

    try {
      const result = await fetch(`https://project-4-api.boom.dev/nfts/${id}`)
      const response =  await result.json()
      console.log(response);
      
      setProduct(response)
    } catch (error) {
      throw(error)
    }

  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}