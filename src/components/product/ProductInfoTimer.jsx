import styles from './ProductInfoTimer.module.scss';
import { Container, Grid, Typography, Box } from '@mui/material';
import classNames from "classnames";
import React from 'react';
import Countdown from '../countdown/Countdown';

export default function ProductInfoTimer({timeEnd, onTimeEnd}) {
    return (
            <Grid container className={classNames(styles['product-info-timer'])}>
               <Grid item xs={12} className={classNames(styles['title-container'])}>
                   <Typography variant="h4" className={classNames(styles['title'])}>
                       ends in
                   </Typography>
               </Grid>
               <Grid item xs={12} className={classNames(styles['timer-container'])}>
                   <Countdown timeLeft={timeEnd} onTimeEnd={onTimeEnd}/>
               </Grid>
            </Grid>
    )
}

