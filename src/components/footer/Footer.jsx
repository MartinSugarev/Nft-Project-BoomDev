import styles from './Footer.module.scss';
import React from 'react';
import {Container, Grid, Typography, Button} from '@mui/material';
import Logo from '../logo/Logo';
import classNames from "classnames";


export default function Footer() {
    
    return (
        <Container maxWidth={false} className={classNames(styles['footer-container'])}>
            <Grid container justifyContent="space-around" alignItems="center">
               <Grid item xs="auto">
                   <Logo type="muted" />
               </Grid>
               <Grid item xs="auto">
                   <Typography className={classNames(styles['footer-paragraph'])} >
                   Bum All Rights Reserved 2021
                   </Typography>
               </Grid>
               <Grid item xs="auto" className={classNames(styles['footer-button'])}>
                  <Button size="small" variant="text">Privacy Policy</Button>
                  <Button size="small" variant="text">Cookie Policy</Button>
               </Grid>
            </Grid>
        </Container>
    )
}
