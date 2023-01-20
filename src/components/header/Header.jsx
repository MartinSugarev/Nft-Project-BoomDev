import React from 'react';
import styles from './Header.module.scss'
import { Grid, Container, TextField, Button } from '@mui/material';
import Logo from '../logo/Logo';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import classNames from "classnames";


export default function Header(){
    return (
       <Container maxWidth={false} className={classNames(styles['header-container'])}>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between" >
            <Grid item xs='auto'>
                <Logo type='default' />
            </Grid>
            <Grid item xs={6}>
                <TextField
                 fullWidth={true}
                 placeholder="Find items, users and activities"
                 InputProps={{
                    className: classNames(styles['header-input']),
                     startAdornment:(
                     <InputAdornment position="start">
                       <SearchIcon className={classNames(styles['header-magnifier-icon'])}/>
                     </InputAdornment>
                     )}}
                />
            </Grid>
            <Grid item xs='auto'>
                 <Button variant="text">Home</Button>
                 <Button variant="text">Activity</Button>
                 <Button variant="contained">Explore</Button>
            </Grid>
        </Grid>
       </Container> 
    )
}
