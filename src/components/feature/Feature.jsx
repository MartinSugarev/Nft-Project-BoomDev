import styles from './Feature.module.scss';
import {Container, ImageListItem, ImageList} from '@mui/material';
import classNames from "classnames";
import React from 'react';
import {images} from '../../data';
import { useRouter } from 'next/router'

export default function Feature({items = []}) {
    const router = useRouter()

    const handleImageClick = (route) => {
        router.push(route)
    }

    return (
        <Container >
            <ImageList cols={6} gap={8}>
                 {items.map((i, index) => {
                     const columns = index === 0 ? 3 : 1
                     const rows = index === 0 ? 2 : 1
                     return <ImageListItem key={index} cols={columns} rows={rows} >
                           <img onClick={() => handleImageClick(i.href)} src={i.image} alt='images' className={classNames(styles['feature-img'])} />
                     </ImageListItem>
                 })}
            </ImageList>
        </Container>
    )
}
