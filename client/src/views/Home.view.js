import React from 'react'
import { Grid } from '@mui/material'
import MainCarousel from '../components/Home/MainCarousel'
import AuthorInfoCard from '../components/Home/AuthorInfoCard'
export default function HomeView() {
  return (
    <Grid container spacing={3} sx={{width:'100%'}} >
      <Grid item xs={12} md={9} >
        <MainCarousel/>

      </Grid>
      <Grid item xs={10} md={2} >
        <AuthorInfoCard/>
      </Grid>
    </Grid>
  )
}
