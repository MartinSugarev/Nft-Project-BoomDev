import styles from './User.module.scss';
import classNames from "classnames";
import React from 'react'
import Avatar from '../avatar/Avatar'

export default function User({name ='' , info = '', avatar = '', size = 55, verified = false, }) {
    return (
        <div className={classNames(styles['user'])}>
            <Avatar size={size} url={'/images/avatar.png'} verified={verified}/>
            <div className={classNames(styles['user-text-container'])}>
              <p className={classNames(styles['name'])}>{name}</p>
              <p className={classNames(styles['info'])}>{info}</p>
            </div>
        </div>
    )
}
