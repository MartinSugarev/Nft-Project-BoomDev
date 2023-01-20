import styles from './Featured.module.scss';
import {Container, ImageListItem, ImageList} from '@mui/material';
import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {images} from '../../data';
import { useRouter } from 'next/router';

export default function Featured({items = []}) {
    const router = useRouter()

    const handleImageClick = (route) => {
        router.push(route)
    }

    return (
        <Container maxWidth={false}>
            <ImageList cols={6}  gap={8}>
                 {items.map((i, index) => {
                  const columns = i.cols ? i.cols : 1
                  const rows = i.rows ? i.rows : 1

                  console.log('column: ' + columns)
                  console.log('rows: ' + rows)

                     return <ImageListItem key={index} cols={columns} rows={rows} >
                           <img onClick={() => handleImageClick(`product/${i.id}`)} src={i?.image} alt='images' className={classNames(styles['feature-img'])} />
                     </ImageListItem>
                 })}
            </ImageList>
        </Container>
    )
}
