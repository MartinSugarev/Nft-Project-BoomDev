import styles from "./ProfileUser.module.scss";
import classNames from "classnames";
import {Typography} from '@mui/material';
import React from 'react';
import Avatar from '../avatar/Avatar';


export default function ProfileUser({name, avatar, verified, info}) {
    return (
        <div className={classNames(styles['profile-user'])}>
            <Avatar url={avatar} verified={verified} />
            <Typography variant="h3">
                {name}
            </Typography>
            <Typography variant="body1" sx={{maxWidth: '450px', textAlign: 'center'}}>
                {info}
            </Typography>
        </div>
    )
}
