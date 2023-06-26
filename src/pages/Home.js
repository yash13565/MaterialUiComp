import React from 'react'
import SideNavbar from '../Components/SideNavbar/SideNavbar'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import MainNavbar from '../Components/MainNavbar/MainNavbar'
import './Home.css'
import TopIcons from '../Components/TopIcons/TopIcons'
import SellerArcade from '../Components/SellerArcade/SellerArcade'
import SliderComp from '../Components/Slider/Slider'
import TopNavbar from '../Components/TopNavbar/TopNavbar'
import Cards from '../Components/Cards/Card'
import Notes from '../Components/Notes/Notes'

function Home() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item sm={12}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12}>
              <MainNavbar />
            </Grid>
            <Grid item sm={6}>
              <div className='sidebar'>
                <SideNavbar />
              </div>
            </Grid>
          </Grid>
          <Grid >
            <TopIcons />
          </Grid>
          <Grid>
            <SellerArcade />
          </Grid>
          <Grid>
            <SliderComp />
          </Grid>
          <Grid>
            <TopNavbar />
          </Grid>
          <Grid>
            <Cards />
          </Grid>
          <Grid>
            <Notes />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
