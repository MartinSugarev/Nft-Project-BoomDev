import styles from './ProductInfoTimer.module.scss';
import { Container, Grid, Typography, Box } from '@mui/material';
import classNames from "classnames";
import React from 'react';
import Countdown from '../countdown/Countdown';

export default function ProductInfoTimer({timeEnd, onTimeEnd}) {
    return (
        <div className={classNames(styles['product-info-timer'])}>
            <Grid container >
               <Grid item xs={12} className={classNames(styles['title-container'])}>
                   <Typography variant="h4" className={classNames(styles['title'])}>
                       ends in
                   </Typography>
               </Grid>
               {timeEnd && <Grid item xs={12} className={classNames({
                   [styles['timer']]: true,
                   [styles['active']]:  timeEnd ? true : false
                })}>
                    <Countdown timeLeft={timeEnd} onTimeEnd={onTimeEnd}/>
               </Grid>}
            </Grid>
            </div>
    )
}

