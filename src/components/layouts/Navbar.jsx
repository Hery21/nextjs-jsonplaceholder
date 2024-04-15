import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import NavMenu from './Navmenu'

export default function Navbar({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar enableColorOnDark position="fixed" color="inherit" sx={{ height: '60px' }}>
        <Toolbar>
          <NavMenu />
        </Toolbar>
      </AppBar>
      <Box sx={{ backgroundColor: 'black', width: '100vw', display: 'flex', justifyContent: 'center', mt: '60px' }}>{children}</Box>
    </Box>
  )
}
