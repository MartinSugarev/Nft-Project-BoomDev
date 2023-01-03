import React, {useEffect, useState} from 'react';
import {Container, Select, Grid, Box, Typography, MenuItem} from '@mui/material';
import CollectorColumn from '../collectors/CollectorColumn';
import lodash from 'lodash';


export default function TopCollectors({collectors = []}) {

    const [changedArr, setChangedArr] = useState([])

     useEffect(() => {
       const newCollectorsArr = collectors.map((col, index) => ({...col, 'id': index + 1}))
       setChangedArr(() => newCollectorsArr)
     }, [])

     

    return (
        <Container maxWidth={false}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5vh'}}>
               <Typography variant="h2">
                   Top Collectors
               </Typography>
         <Select value=""  displayEmpty sx={{background: '#4e24f2', width: '15vw'}}>
               <MenuItem value="" disabled >Sort By</MenuItem>   
         </Select>
            </Box>
         <Grid container spacing={1}>
             {lodash.chunk(changedArr, 3).map((card, index) => {  
               return  <Grid key={index} item xs={3}>
                    <CollectorColumn items={card}/>
                 </Grid>
             })}
        </Grid> 
        </Container>
    )
}

