import styles from "./ProfileCollectionFilters.module.scss";
import classNames from "classnames";
import {Typography, Container, FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function ProfileCollectionFilters({filters}) {

    const handlePriceRangeChange = () => {

    }
    const handleSortByChange = () => {

    }

    return (
        <div   className={classNames(styles['profile-collection-filters'])}>
            <Stack direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={1} >
            <FormControl fullWidth>
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
            <FormControl fullWidth>
            <InputLabel id="select-label">Price range</InputLabel>
            <Select
             label="Price range"
             onChange={handlePriceRangeChange}
              >
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
              <FormControl fullWidth>
                 <TextField
                 className={classNames(styles['profile-input'])}      
                 focused={false}
                 fullWidth={true}
                 size="large"
                 variant="standard"
                 InputProps={{
                 startAdornment: <InputAdornment position="start"> <SearchIcon style={{color: 'ffffff', marginLeft: '10px'}}/> </InputAdornment>,
                }}
                 />  
                 </FormControl>
            </Stack>
        </div>
    )
}


// You must use "FormControl" component from @mui/material
// You must use "Select" component from @mui/material
// You must use "InputLabel" component from @mui/material
// You must use "MenuItem" component from @mui/material
// You must use "Stack" component from @mui/material
// You must use "TextField" component from @mui/material
// You must use "InputAdornment" component from @mui/material
// You must use "Search" component from @mui/icons-material