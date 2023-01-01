import styles from './Step.module.scss';
import { Grid, Typography} from '@mui/material';
import classNames from "classnames";
import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Step({number, title, description}) {
    const theme = useTheme()
    return (
        <Grid container className={classNames(styles['step-layout'])} m={0}>
            <Grid item xs={3} className={classNames(styles['step-number'])} sx={{background: theme.palette.primary.main}}>
                  {number}
            </Grid>
            <Grid item xs={9} className={classNames(styles['step-text'])}>
               <Typography variant="h5" mb={1}>
                  {title}
               </Typography>
               <Typography variant="body2" className={classNames(styles['step-text-second-child'])}>
               {description}
               </Typography>
            </Grid>
        </Grid>
    )
}
