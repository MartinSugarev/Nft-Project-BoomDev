import Description from '../../src/components/description/Description';
import Hero from '../../src/components/hero/Hero';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import { Box } from "@mui/material";

import React from 'react'

export default function index() {
    return (
        <Box component="div" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Header />
          <Hero text={'Component Hero'}/>
          <Description text={'kjkjskdjlaksjdkajdalkdjaljdajdkjskjkjksjkjdkjaskdjakdjkajdkajsdkdjakljskjkajdkjnnvjhdkjfhdbvhfbhjvbjvbfhkjkjdklasjdajdalkjdkajdlakjdkasdjalskjdalkjdakjdaldlajdla'}/>
          <Footer />
        </Box>
    )
}
