import styles from './ProductActions.module.scss';
import { Grid, Box, Button} from '@mui/material';
import classNames from "classnames";
import { useTheme } from '@mui/material/styles';
import React from 'react'

export default function ProductActions({isLive, currency, buyAmount, bidAmount, onBuy, onBid}) {
    

    return (
        <Box component="div" className={classNames(styles['product-actions'])}>
           <Grid container spacing={2}>
              <Grid item xs={7}>
                 <Button fullWidth={true} disabled={isLive ? false : true } onClick={onBuy} variant="contained" className={classNames(styles['button'])}>
                      {`Buy amount ${buyAmount} ${currency}`}
                 </Button>
              </Grid>
              <Grid item xs={5}>
                 <Button fullWidth={true} disabled={isLive ? false : true } onClick={onBid} variant="outlined" color="success" className='button' >
                    {`Place bid for ${bidAmount} ${currency}`}
                 </Button>
              </Grid>
           </Grid>
        </Box>
    )
}


