import styles from './Logo.module.scss';
import React, {memo} from 'react';
import classNames from "classnames";

const Logo = ({type = 'default'}) => {
    return (
        <>
           {type === 'default' ? <img className={classNames(styles['logo-container'])} src="/images/logo.svg" alt="logo-image"/> : <img className={classNames(styles['logo-container'])} src="/images/logo-muted.svg" alt="logo-muted-image"/> }
        </>   
    )
}

export default memo(Logo)
