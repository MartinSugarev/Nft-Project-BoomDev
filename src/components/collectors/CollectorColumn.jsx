import styles from './CollectorColumn.module.scss';
import {Container} from '@mui/material';
import classNames from "classnames";
import React from 'react';
import Collector from './Collector'

export default function CollectorColumn({items=[]}) {
    return (
        <Container maxWidth={false}>
           {items.map((i, index) => {
               const type = index % 2 !== 0 ? 'lighter' : 'dark'
               return <Collector key={index} name={i.name} avatar={i.avatar}  verified={i.verified} nftsCount={i.nftsCount} type={type} number={i.id} />
           })}
        </Container>
    )
}
