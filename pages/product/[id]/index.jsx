import React from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const baseUrl = process.env.apiUrl

  const [product, setProduct] = useState();

  useEffect(async () => {
    
      const result = await fetch(`${baseUrl}/nfts/${id}`)
      const response =  await result.json()
      
      setProduct(response)
    

  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}