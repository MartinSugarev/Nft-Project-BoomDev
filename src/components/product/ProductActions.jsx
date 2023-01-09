import styles from './ProductActions.module.scss';
import { Grid, Box, Button} from '@mui/material';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import React from 'react'

export default function ProductActions({isLive, currency, buyAmount, bidAmount, onBuy, onBid}) {
    
    const theme = useTheme()

    return (
        <Box component="div" className={classNames(styles['product-actions'])}>
           <Grid container spacing={2}>
              <Grid item xs={7}>
                 <Button fullWidth={true} disabled={isLive} onClick={onBuy} type="contained" className={classNames(styles['button'])}>
                      {`Buy amount ${butAmount} ${currency}`}
                 </Button>
              </Grid>
              <Grid item xs={5}>
                 <Button fullWidth={true} disabled={isLive} onClick={onBid} type="outlined" className={classNames(styles['button'])} style={{background: theme.palette.background.default, color: theme.palette.secondary.main, border: `2px solid ${theme.palette.secondary.main}`}}>
                    {`Place bid for ${bidAmount} ${currency}`}
                 </Button>
              </Grid>
           </Grid>
        </Box>
    )
}


