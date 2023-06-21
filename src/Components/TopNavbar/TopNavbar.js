import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TopNavbar() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
      <Box sx={{ width: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          variant='fullWidth'
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
          <Tab value="four" label="Item four" />
          <Tab value="five" label="Item five" />
          <Tab value="six" label="Item six" />
        </Tabs>
      </Box>
      </>
    );
}
