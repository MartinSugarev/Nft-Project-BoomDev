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
                dadadada
            </Typography>
            <Typography variant="body1" sx={{maxWidth: '450px', textAlign: 'center'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus eius quas numquam voluptatum. Sequi minima veritatis suscipit? Minus beatae illo corporis esse nemo autem id, animi possimus totam vitae quos assumenda cum nam nesciunt quis et cumque quasi numquam!
            </Typography>
        </div>
    )
}
