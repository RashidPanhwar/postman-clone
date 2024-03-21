"use client"
import React from 'react'

// Material UI
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    error: {
        width: '80%',
        height: 'auto',
        margin: 'auto',
        objectPosition: 'center 0%'
    }
})

const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png'
    const classes = useStyle()

  return (
    <Box>
      <Typography mt={2} mb={2} className={`text-lg`}> Response </Typography>
      <Box className={`flex ${classes.error}`}>
        <img src={error} alt='error' />
      </Box>
    </Box>
  )
}

export default ErrorScreen