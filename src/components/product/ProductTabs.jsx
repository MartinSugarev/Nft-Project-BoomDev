import styles from './ProductTabs.module.scss';
import { TableBody, Box, TableCell, Tab, Tabs, TableContainer, TableRow, Table} from '@mui/material';
import classNames from "classnames";
import {TabPanel, TabList, TabContext } from '@mui/lab'
import React, {useState} from 'react';
import User from '../user/User';
import {parseISO, formatDistance} from 'date-fns';
import { useTheme } from '@mui/material/styles';

export default function ProductTabs({text, bids = []}) {

    const [value, setValue] = useState('1');
    const theme = useTheme()
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <div className={classNames(styles['product-tabs'])}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="Details" value="1" className={classNames(styles['tab-details'])}/>
            <Tab label="Bids" value="2" className={classNames(styles['tab-bids'])}/>
          </TabList>
        </Box>
          <TabPanel value="1">
          {text}
          </TabPanel>
          <TabPanel value="2">
              <TableContainer>
                  <Table>
                  <TableBody>
          {bids.length !== 0 ? bids.map((row, i) => {
              const isLighter = i % 2 !== 0 ? true : false;              
          return  <TableRow key={i} sx={{'&:last-child td, &:last-child th': { border: 0 }}} className={classNames({
            [styles[`table-row-${i}`]]: true,
            [styles['active']]:  isLighter ? true : false
         })}>
              <TableCell sx={{display: 'flex', justifyContent: 'flex-start'}} align="left"> <User name={row.user.name} avatar={row.user.avatar} verified={row.user.verified}/></TableCell>
              <TableCell align="right" sx={{color: theme.palette.secondary.main}}>{row.amount}</TableCell>
              <TableCell align="right">{formatDistance(parseISO(row.date),new Date(), { addSuffix: true })}</TableCell>
            </TableRow>
               }) : <TableRow className={classNames(styles['table-row-0'])}>
                      <TableCell></TableCell>
                   </TableRow>}
                   </TableBody>
                  </Table>
              </TableContainer>
          </TabPanel>
        </TabContext>    
      </div>
    )
}
