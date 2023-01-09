import styles from './ProductContainer.module.scss';
import { Grid, Box, Button, Container} from '@mui/material';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import React from 'react';
import ProductImage from './ProductImage';
import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';
import ProductInfoCreator from './ProductInfoCreator';
import ProductInfoLikes from './ProductInfoLikes';
import ProductInfoPrice from './ProductInfoPrice';
import ProductInfoStatus from './ProductInfoStatus';
import ProductInfoTimer from './ProductInfoTimer';
import ProductInfoTitle from './ProductInfoTitle';
import ProductTabs from './ProductTabs';


export default function ProductContainer({name, owner, price, currency, likes,auction_end, details, source, bids}) {
    return (
        <Container maxWidth={false} className={classNames(styles["product-container"])}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                   <ProductImage text={source?.url}/>
                </Grid>
                <Grid item xs={5}>
                <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            isLive={auction_end}
            onTimeEnd={auction_end}
          />
          <ProductTabs bids={bids} text={details} />
          <ProductActions
            isLive={auction_end}
            currency={currency}
            buyAmount={bids}
            bidAmount={bids}
            onBid={bids}
            onBuy={bids}
          />
               </Grid>
            </Grid>
        </Container>
    )
}

// {
//     "name": String,
//     "owner":{
//        "username": String,
//        "verified": Boolean,
//        "avatar":{
//           "url": String
//        }
//     },
//     "price": Number,
//     "currency": String,
//     "likes": Number,
//     "auction_end": String,
//     "details": String,
//     "source":{
//        "url": String
//     },
//     "bids":[
//        {
//           "user":{
//              "info": Number,
//              "name": String,
//              "verified": Boolean,
//              "avatar": String
//           },
//           "date": String,
//           "amount": Number
//        }
//     ]
//     }