import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import {Typography, Container, Box} from '@mui/material';
import React from 'react';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import { formatDistance, parseISO } from "date-fns";


export default function ActivityListItem({user, created_at = '2022-12-12', nft, type = "like"}) {
    return (
        <Container maxWidth className={classNames(styles["activity-list-item"])} sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                 <Avatar verified={user.verified} url={user.avatar.url} />
                <Box component="div">
                <Typography>
                   {user.name + ' ' + type === 'like' ? 'liked' : 'bought' + ' ' + `${<Link href="/">{nft.name}</Link>}` + 'by' + `${<Link href="/">{nft.owner.username}</Link>}`}
                </Typography>
                <Typography >
                 {formatDistance(parseISO(created_at), new Date())} ago
                </Typography>
                </Box> 
        </Container>
    )
}
