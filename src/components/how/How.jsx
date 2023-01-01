import styles from './How.module.scss';
import {Container, Grid, Typography, Button} from '@mui/material';
import classNames from "classnames";
import Step from './Step';

import React from 'react'

export default function How({description, title, items = [], link}) {
    return (
 
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={classNames(styles['how-grid-container'])}>
              <Grid item >
                 <Typography mb={2} className={classNames(styles['how-heading'])} variant="h1">
                     {title}
                 </Typography>
                 <Typography mb={4} className={classNames(styles['how-text'])} variant="body1">
                 {description}
                 </Typography>
                 <Button href={link} variant="contained">learn more</Button>
              </Grid>
              <Grid item xs={5} container direction="row" spacing={2} sx={{position: 'relative', top: '-5%'}}>
                 {items.map((i, index) => {
                     <Grid item key={index}>
                          <Step title={i.title} description={i.description} />
                     </Grid>
                 })}
              </Grid>
            </Grid>

    )
}
