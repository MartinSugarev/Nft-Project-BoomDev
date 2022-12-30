import styles from './Trending.module.scss';
import React from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem} from '@mui/material';
import Card from '../card/Card'



export default function Trending({cards = []}) {

   //  const cards = [
   //      {
   //         "name":"Ivy",
   //         "user":{
   //            "avatar":{
   //               "url":"images/avatar.png"
   //            },
   //            "verified":true
   //         },
   //         "mediaUrl":"images/nft.jpg",
   //         "price":1,
   //         "currency":"ETH"
   //      },
   //      {
   //         "name":"Judie",
   //         "user":{
   //            "avatar":{
   //               "url":"images/avatar.png"
   //            },
   //            "verified":true
   //         },
   //         "mediaUrl":"images/nft.jpg",
   //         "price":2.3,
   //         "currency":"ETH"
   //      },
   //      {
   //         "name":"Juniper",
   //         "user":{
   //            "avatar":{
   //               "url":"images/avatar.png"
   //            },
   //            "verified":true
   //         },
   //         "mediaUrl":"images/nft.jpg",
   //         "price":5,
   //         "currency":"ETH"
   //      },
   //      {
   //         "name":"Maple",
   //         "user":{
   //            "avatar":{
   //               "url":"images/avatar.png"
   //            },
   //            "verified":true
   //         },
   //         "mediaUrl":"images/nft.jpg",
   //         "price":10,
   //         "currency":"ETH"
   //      }
   //   ];

    return (
        <Container maxWidth={false}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                   Trending
               </Typography>
         <Select value=""  displayEmpty>
               <MenuItem value="" disabled >This week</MenuItem>   
         </Select>
            </Box>
         <Grid container spacing={1}>
             {cards.map((card, index) => {
               return  <Grid key={index} item xs={3}>
                    <Card name={card.name} mediaUrl={card.mediaUrl} user={card.user} price={card.price} currency={card.currency} timeLeft={card.timeLeft}  />
                 </Grid>
             })}
        </Grid> 
        </Container>
    )
}