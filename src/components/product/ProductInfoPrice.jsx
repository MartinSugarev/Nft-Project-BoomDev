import styles from './ProductInfoPrice.module.scss';
import { Typography, Container } from '@mui/material';
import classNames from "classnames";
import React from 'react'

export default function ProductInfoPrice({amount = 0, currency}) {
    return (
        <div className={classNames(styles['product-info-price'])}>
            <Typography variant="h6" >
                 {`on sale for ${amount} ${currency}`}
            </Typography>
        </div>
    )
}
