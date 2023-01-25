import React from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem, FormControl, InputLabel} from '@mui/material';
import Card from '../card/Card'



export default function Trending({cards = [], filters, handleThisWeekChange}) {

 

    return (
        <Container maxWidth={false} sx={{padding: '30px 0' }}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                   Trending
               </Typography>
               <FormControl sx={{minWidth: '200px'}}>
               <InputLabel id="demo-simple-select-label">This week</InputLabel>
            <Select
             label=""
             onChange={handleThisWeekChange}
              >  
            {Array.isArray(filters.sort) && filters.sort.map((s, i) => (
            <MenuItem key={i} value={s.value}>{s.label}</MenuItem>
              ))}  
              </Select>
              </FormControl>
            </Box>
         <Grid container spacing={1}>
             {cards.map((card, index) => {  
                       
               return  <Grid key={index} item xs={3}>
                    <Card name={card.name} mediaUrl={card.mediaUrl} user={card.owner} price={card.price} currency={card.currency} timeLeft={card.timeLeft}  />
                 </Grid>
             })}
        </Grid> 
        </Container>
    )
}
