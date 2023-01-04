import styles from './ProductImage.module.scss'
import { Paper } from '@mui/material';
import classNames from "classnames";

import React from 'react'

export default function ProductImage({url}) {
    return (
        <Paper variant="outlined" className={classNames(styles['product-image'])}>
            <img className={classNames(styles['image'])} src={url} alt="product_image" />
        </Paper>
    )
}
