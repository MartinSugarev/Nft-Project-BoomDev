import styles from './ProductInfoTitle.module.scss';
import { Typography } from '@mui/material';
import React from 'react';
import classNames from "classnames";

export default function ProductInfoTitle({text}) {
    return (
        <div className={classNames(styles['product-info-title'])}>
            <Typography variant="" className={classNames(styles['title'])}>
                {text}
            </Typography>
        </div>
    )
}
