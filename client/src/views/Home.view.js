import React from 'react'
import { Grid } from '@mui/material'
import MainCarousel from '../components/Home/MainCarousel'
export default function HomeView() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9} >
        <MainCarousel/>
      </Grid>
      <Grid item xs={12} md={3} > </Grid>
    </Grid>
  )
}
