import React from 'react'
import SideNavbar from '../Components/SideNavbar/SideNavbar'
// import TopNavbar from '../Components/TopNavbar/TopNavbar'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import MainNavbar from '../Components/MainNavbar/MainNavbar'
import './Home.css'

function Home() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Grid container spacing={10}>
            <Grid item sm={6}>
              <MainNavbar />
              {/* <div>Hii</div> */}
            </Grid>
            <Grid item sm={12}>
              <SideNavbar />
              {/* <div>Hello</div> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
