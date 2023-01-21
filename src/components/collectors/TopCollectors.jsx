import React from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem} from '@mui/material';
import CollectorColumn from './CollectorColumn';
import lodash from 'lodash';


export default function TopCollectors({collectors = [], filters = []}) {


    return (
        <Container maxWidth={false} >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                   Top Collectors
               </Typography>
         <Select value=""  displayEmpty sx={{background: '#4e24f2', width: '15vw'}}>
               <MenuItem value="" disabled >Sort By</MenuItem>   
         </Select>
            </Box>
         <Grid container spacing={1}>
             {lodash.chunk(collectors.sort((a, b) => b.nftCount - a.nftCount).map((col, index) => ({...col, 'id': index + 1})), 3).map((card, index) => {                
               return  <Grid key={index} item xs={3}>
                    <CollectorColumn items={card}/>
                 </Grid>
             })}
        </Grid> 
        </Container>
    )
}

