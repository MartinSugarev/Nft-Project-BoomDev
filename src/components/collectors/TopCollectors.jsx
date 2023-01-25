import React from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem, FormControl, InputLabel} from '@mui/material';
import CollectorColumn from './CollectorColumn';
import lodash from 'lodash';


export default function TopCollectors({collectors = [], filters = [], handleSortByChange}) {


    return (
        <Container maxWidth={false} >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                   Top Collectors
               </Typography>
               <FormControl sx={{minWidth: '200px'}}>
               <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
             label=""
             onChange={handleSortByChange}
              >  
            {Array.isArray(filters.sort) && filters.sort.map((s, i) => (
            <MenuItem key={i} value={s.value}>{s.label}</MenuItem>
              ))}  
              </Select>
              </FormControl>
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

