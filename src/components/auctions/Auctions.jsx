import React from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem} from '@mui/material';
import Card from '../card/Card';

export default function Auctions({cards = []}) {


    return (
        <Container maxWidth={false} sx={{padding: '30px 0 40px' }}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                 🔥 Live Auctions
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
