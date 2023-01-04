import styles from './ProductInfoCreator.module.scss';
import { Container, Grid, Typography, Box } from '@mui/material';
import classNames from "classnames";
import React from 'react';
import User from '../user/User'

export default function ProductInfoCreator({name, avatar, verified = false}) {
    return (
        <Box component="div"  className={classNames(styles['product-info-creator'])}>
            <Grid container >
               <Grid item xs={12} className={classNames(styles['title-container'])}>
                   <Typography variant="h4" className={classNames(styles['title'])}>
                       creator
                   </Typography>
               </Grid>
               <Grid item xs={12} className={classNames(styles['user-container'])}>
                   <User name={name} avatar={avatar} verified={verified} />
               </Grid>
            </Grid>
        </Box>
    )
}
