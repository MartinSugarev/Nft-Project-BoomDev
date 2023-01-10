import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import {Typography, Container, Grid} from '@mui/material';
import React from 'react';
import ProfileCollectionFilters from './ProfileCollectionFilters';
import Card from '../card/Card';

export default function ProfileCollection({user, filters, items = []}) {
    return (
        <div className={classNames(styles['profile-collection'])}>
        <Container maxWidth={false} >
            <Grid container>
               <Grid item xs={3}>
                   <Typography variant="h3">
                       Collection
                   </Typography>
               </Grid>
               <Grid item xs={9}>
                   <ProfileCollectionFilters filters={filters} />
               </Grid>
               <Grid xs={12}>
                   {items.map((item, index) => {
                       return <Grid item key={index}>
                            <Card name={item.name} likes={item.likes} mediaUrl={item.mediaUrl} user={item.user} price={item.price} currency={item.currency} timeLeft={item.timeLeft}/>
                       </Grid>
                   })}
               </Grid>
            </Grid>
        </Container>
        </div>
    )
}

