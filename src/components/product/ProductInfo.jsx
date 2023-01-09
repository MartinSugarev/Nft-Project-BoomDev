import styles from './ProductInfo.module.scss';
import { Container, Grid, Typography, Stack } from '@mui/material';
import classNames from "classnames";
import React from 'react';
import ProductTitle from './ProductInfoTitle';
import ProductInfoPrice from './ProductInfoPrice';
import ProductInfoStatus from './ProductInfoStatus';
import ProductInfoLikes from './ProductInfoLikes';
import ProductInfoCreator from './ProductInfoCreator';
import ProductInfoTimer from './ProductInfoTimer';



export default function ProductInfo({title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive}) {
    return (
        <div className={classNames(styles['product-info'])}>
             <Grid container rowSpacing={2} columnSpacing={2}>
                 <Grid item xs={12} >
                     <ProductTitle text={title}/>
                 </Grid>
                 <Grid item xs={12}>
                     <Stack direction="row" justifyContent="space-between" className={classNames(styles['stats'])}>
                         <ProductInfoPrice  amount={price} currency={currency}/>
                         <Stack direction="row" spacing={1} >
                           {isLive && <ProductInfoStatus />}
                           <ProductInfoLikes amount={likes} />
                         </Stack>
                     </Stack>
                 </Grid>
                 <Grid item xs={7}>
                    <ProductInfoCreator name={creator?.name} avatar={creator?.avatar} verified={creator?.verified}/>
                 </Grid>
                 <Grid item xs={5}>
                    <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
                 </Grid>
             </Grid>
        </div>
    )
}
