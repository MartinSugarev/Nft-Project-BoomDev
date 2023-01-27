import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import {Typography, Container, Grid} from '@mui/material';
import React from 'react';
import ProfileCollectionFilters from './ProfileCollectionFilters';
import Card from '../card/Card';

export default function ProfileCollection({
    user = { name: "J", info: "someInfo" },
    filters = "name",
    items = [
      {
        name: "String",
        likes: 0,
        user: "Jonny",
        mediaUrl: "images/nft.jpg",
        timeLeft: 100000000,
        price: "~12.2",
        currency: "BTC",
      },
  
      {
        name: "String",
        likes: 0,
        user: "Jonny",
        mediaUrl: "images/nft.jpg",
        timeLeft: 100000000,
        price: "~12.2",
        currency: "BTC",
      },
    ],
  }) {
    return (
        <div className={classNames(styles['profile-collection'])}>
        <Container maxWidth={false} >
            <Grid container spacing={2}>
               <Grid item xs={3}>
                   <Typography variant="h3">
                       Collection
                   </Typography>
               </Grid>
               <Grid item xs={9}>
                   <ProfileCollectionFilters filters={filters} />
               </Grid>
               <Grid item container gap={2} xs={12}>
                   {items.map((item, index) => {
                       return <Grid item xs={3} key={index}>
                            <Card name={item.name} likes={item.likes} mediaUrl={item.mediaUrl} user={item.user} price={item.price} currency={item.currency} timeLeft={item.timeLeft}/>
                       </Grid>
                   })}
               </Grid>
            </Grid>
        </Container>
        </div>
    )
}

