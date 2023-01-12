import styles from "./ActivityFilters.module.scss";
import classNames from "classnames";
import {Typography, Container, FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({filters}) {

    const handlePriceRangeChange = () => {

    }
    const handleSortByChange = () => {

    }

    return (
        <div   className={classNames(styles['activity-filters'])}>
            <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={1} >
            <FormControl fullWidth sx={{flex: 1}}>
            <InputLabel id="select-label">Sort by</InputLabel>
            <Select
             label="Sort by"
             onChange={handleSortByChange}
              >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
            <FormControl fullWidth sx={{flex: 1}}>
            <InputLabel id="select-label">Price range</InputLabel>
            <Select
             label="Price range"
             onChange={handlePriceRangeChange}
              >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl >
              <FormControl fullWidth variant="standard" sx={{flex: 2}}> 
                 <TextField
                 className={classNames(styles['activity-input'])}      
                 focused={false}
                 fullWidth={true}
                 InputProps={{  
                 startAdornment: <InputAdornment position="start"> <SearchIcon style={{color: 'ffffff', marginLeft: '10px'}}/> </InputAdornment>,
                }}
                 />  
                 </FormControl>
            </Stack>
        </div>
    )
}