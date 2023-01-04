import styles from './ProductInfoLikes.module.scss';
import { Chip } from '@mui/material';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";

export default function ProductInfoLikes({amount = 0}) {
    const theme = useTheme()
    return (
        <div className={classNames(styles['product-info-likes'])}>
            <Chip icon={<FavoriteIcon fontSize="small" style={{color: 'rgba(36,242,94)'}} />} variant="outlined" sx={{background: 'rgba(36,242,94, 0.2)', color: theme.palette.secondary.main, fontWeight: '600', border: '2px solid rgba(36,242,94)'}}  label={millify(amount)} className={classNames(styles['likes'])}/>
        </div>
    )
}
