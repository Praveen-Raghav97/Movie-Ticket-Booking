import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} padding={2} bgcolor={"#2b2d42"} color={"white"}>
      <Typography variant='tbody'>
      Zenzy All rights reserved © 2024 
      </Typography>
      <Typography variant='tbody'>
     By Praveen Raghav © 2024
      </Typography>
    </Box>
  )
}

export default Footer
