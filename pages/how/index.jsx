import Description from '../../src/components/description/Description';
import Hero from '../../src/components/hero/Hero';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import { Box } from "@mui/material";

import React from 'react'

export default function Index() {
    return (
        <Box component="div" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Header />
          <Hero text="How it works"/>
          <Description text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
      />
          <Footer />
        </Box>
    )
}
