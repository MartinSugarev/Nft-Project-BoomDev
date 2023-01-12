import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import {Typography, Container, Box} from '@mui/material';
import React from 'react';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import { useTheme } from '@mui/material/styles';
import { formatDistance, parseISO } from "date-fns";


export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  return (
    <div className={classNames(styles["activity-list-item"])}>
      <div className={classNames(styles.wrapper)}>
        <Avatar verified={user.verified} url={user.avatar.url}></Avatar>
        <div>{user.name}</div>
        {type == "like" ? <p>liked</p> : <p>bought</p>}
        <Link href="/">{nft.name} </Link>
        <p>by </p>
        <Link href="/"> {nft.owner.username}</Link>
      </div>
      <div>{formatDistance(parseISO(created_at), new Date())} ago</div>
    </div>
  );
}
