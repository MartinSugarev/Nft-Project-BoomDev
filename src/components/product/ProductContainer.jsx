import styles from './ProductContainer.module.scss';
import { Grid, Box, Container} from '@mui/material';
import classNames from "classnames";
import React from 'react';
import ProductImage from './ProductImage';
import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';


export default function ProductContainer({name, owner, price, currency, likes,auction_end, details, source, bids}) {
    return (
        <Container maxWidth={false} className={classNames(styles["product-container"])}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                   <ProductImage url={source?.url}/>
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

