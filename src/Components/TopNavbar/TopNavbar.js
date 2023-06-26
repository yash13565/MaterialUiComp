import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './TopNavbar.css'
export default function TopNavbar() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
      <Box className='navparent' sx={{ width: '85%',position:'fixed',top:'32%',left:'13%',backgroundColor:'white'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
          variant='fullWidth'
          
        >
          <Tab value="one" label="Overview" />
          <Tab value="two" label="Details" />
          <Tab value="three" label="Timeline" />
          <Tab value="four" label="Notes" />
          <Tab value="five" label="Activities" />
          <Tab value="six" label="Attachment" />
          
        </Tabs>
      </Box>
      </>
    );
}
