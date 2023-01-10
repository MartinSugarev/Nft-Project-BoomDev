import styles from "./ProfileHero.module.scss";
import classNames from "classnames";
import React from 'react'

export default function ProfileHero({image}) {
    return (
        <div className={classNames(styles['profile-hero'])}>
            <img src={image} alt="profileHero-image" className={classNames(styles['image'])} />
        </div>
    )
}
