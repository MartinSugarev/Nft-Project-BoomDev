import styles from './ProductImage.module.scss'
import { Grid, Container, TextField, Button } from '@mui/material';
import classNames from "classnames";

import React from 'react'

export default function ProductImage({url}) {
    return (
        <div className={classNames(styles['product-image'])}>
            <img className={classNames(styles['image'])} src={url} alt="product_image" />
        </div>
    )
}
