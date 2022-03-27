import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'


import { HomeView,BlogDetailView,NotFoundView} from './views'
import { Container } from '@mui/material'
export default function App() {
  return (
    <Container maxWidth="xl">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/blog/:id" element={<BlogDetailView />} />
        {/* 404 not found */}
        <Route path="*" element={<NotFoundView/>} />
      </Routes>
    </Container>
  )
}

