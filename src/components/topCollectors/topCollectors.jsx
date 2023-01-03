import React, {useLayoutEffect, useState} from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem} from '@mui/material';
import CollectorColumn from '../collectors/CollectorColumn';
import lodash from 'lodash';

export default function topCollectors({collectors = []}) {

    const [changedArr, setChangedArr] = useState([])

     useLayoutEffect(() => {
       const newCollectorsArr = collectors.map((col, index) => col['id'] = index)
       setChangedArr(() => newCollectorsArr)
     }, [])

    return (
        <Container maxWidth={false}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                   Top Collectors
               </Typography>
         <Select value=""  displayEmpty>
               <MenuItem value="" disabled >This week</MenuItem>   
         </Select>
            </Box>
         <Grid container spacing={1}>
             {lodash.chunk(changedArr, 3).map((card, index) => {
               return  <Grid key={index} item xs={3}>
                    <CollectorColumn name={card.name} nftsCount={card.nftsCount} avatar={card.avatar} verified={card.verified} number={card.id} />
                 </Grid>
             })}
        </Grid> 
        </Container>
    )
}

