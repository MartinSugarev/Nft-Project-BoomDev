import styles from './How.module.scss';
import {Container, Grid, Typography, Button} from '@mui/material';
import classNames from "classnames";
import Step from './Step';
import React from 'react'

export default function How({description = "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM." , title = 'HOW IT WORKS', items = [
    {title: 'Digital Currency', number: 1, description: "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"},
    {title: 'Crypto Wallet', number: 2, description: "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain."},
    {title: 'BUM.', number: 3, description: "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. "}
], link}) {
    return (
       <div className={classNames(styles['how-layout'])} >
        <Container maxWidth={false} disableGutters>
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={classNames(styles['how-grid-container'])}>
              <Grid item xs={7}>
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
                    return <Grid item key={index}>
                          <Step title={i.title} description={i.description} number={i.number}/>
                     </Grid>
                 })}
              </Grid>
            </Grid>
        </Container>
        </div> 
    )
}
