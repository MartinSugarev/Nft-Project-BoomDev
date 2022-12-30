import styles from './Card.module.scss';
import { useTheme } from '@mui/material/styles';
import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {Card as CardContainer, CardActions, CardMedia, CardHeader, Typography, Chip, Box} from '@mui/material';
import Avatar from '../avatar/Avatar';
import PropTypes from 'prop-types';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import Countdown2 from '../countdown/Countdown'
import Countdown  from 'react-countdown';


export default function Card({name , likes = 0 ,mediaUrl, user, price, currency, timeLeft }) {

     const theme = useTheme()
     const [isLive, setIsLive] = useState(false)

     useEffect(() => {
        if(timeLeft){
            setIsLive(() => true)
        }
     }, [])


    return (
        <CardContainer sx={{background:  isLive && 'rgba(36,242,94,0.08)'}} className={classNames(styles['card'])}>
           <CardHeader 
            avatar={<Avatar url={user}/>}/> 
       <CardContainer sx={{position: 'relative', borderRadius: '20px'}}>
        <CardMedia
        className={classNames(styles['media'])}
        component="img"
        image={mediaUrl}
        alt="nft"
      />    
      {isLive && <Box className={classNames(styles['timer'])} >
          <Countdown2 timeLeft={timeLeft}/>
      </Box>}
      {isLive && <Chip className={classNames(styles['badge'])} sx={{background: theme.palette.secondary.main, color: theme.palette.background.default}} icon={<CircleIcon />}  variant="outlined" label="live"/>}
     </CardContainer>     
        <CardActions sx={{display: 'flex', justifyContent: 'space-between'}} >
        <Box>
          <Typography variant="h6" className={classNames(styles['title'])} >
             {name}
          </Typography>
          <Typography variant="h6" className={classNames(styles['price'])} >
              {price + ' ' + currency}
          </Typography>
        </Box>    
        <Chip className={classNames(styles['likes'])} color="secondary" icon={<FavoriteIcon  />} label={millify(likes)} variant="outlined"/>
        </CardActions>
        </CardContainer>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    likes: PropTypes.number,
    mediaUrl: PropTypes.string,
    user:{
        avatarUrl: PropTypes.string,
        verified: PropTypes.boolean
    },
    price: PropTypes.string,
    currency: PropTypes.string,
    timeLeft: PropTypes.number
}
