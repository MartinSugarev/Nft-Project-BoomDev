import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import {Typography, Container, Box} from '@mui/material';
import React from 'react';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import { useTheme } from '@mui/material/styles';
import { formatDistance, parseISO } from "date-fns";


export default function ActivityListItem({user, created_at, nft, type = "like"}) {
 
    const theme = useTheme()

    return (
        <Container maxWidth className={classNames(styles["activity-list-item"])} sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Avatar verified={user?.verified} url={user?.avatar?.url}></Avatar>
                <Box component="div">
                <Typography sx={{lineHeight: '1'}}>
                   <b>{user?.name}</b> {type === 'like' ? 'liked' : 'bought'} <Link style={{color: theme.palette.secondary.main, textDecoration: 'underlined'}}  href="/">{nft?.name}</Link> by <Link style={{color: theme.palette.secondary.main, textDecoration: 'underlined'}} href="/">{nft?.owner?.username}</Link>
                </Typography>
                <Typography className={classNames(styles["activity-secondParagraph"])}>
                {created_at && formatDistance(parseISO(created_at),new Date(), { addSuffix: true })}
                </Typography>
                </Box> 
        </Container>
    )
}
