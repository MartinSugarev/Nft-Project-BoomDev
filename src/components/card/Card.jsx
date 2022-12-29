import styles from './Card.module.scss';
import classNames from "classnames";
import React from 'react';
import {Card as CardContainer, CardActions, CardMedia, CardHeader, Container, Typography, Chip} from '@mui/material';
import Avatar from '../avatar/Avatar';
import PropTypes from 'prop-types';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Card({name , likes = 0 ,mediaUrl, user, price, currency,  }) {
    return (
        <CardContainer className={classNames(styles['card'])}>
           <CardHeader 
            avatar={<Avatar url={user}/>}/> 
        <CardMedia
        className={classNames(styles['media'])}
        component="img"
        image={mediaUrl}
        alt="nft"
      />    
        <CardActions >
        <Container>
          <Typography className={classNames(styles['title'])}>
             {name}
          </Typography>
          <Typography className={classNames(styles['price'])}>
              {price + ' ' + currency}
          </Typography>
        </Container>    
        <Chip className={classNames(styles['likes'])} color="secondary" icon={<FavoriteIcon />} label={millify(likes)} variant="outlined"/>
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
    
}
