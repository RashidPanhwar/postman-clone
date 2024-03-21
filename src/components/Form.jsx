"use client"
import React, {useContext} from 'react'

// Material UI
import {makeStyles} from '@mui/styles'
import { Box, Select, MenuItem, TextField, Button } from '@mui/material'


// State management with Context
import { DataContext } from '@/context/DataProvider'

const useStyle = makeStyles({
    textField : {
        width: '100%',
        background: '#F6F6F6'
    },
    button: {
        color: 'black',
        
    }
})

const Form = ({onRequestSubmit}) => {
    const classes = useStyle()

    // Form value get
    const {formData, setFormData} = useContext(DataContext);
    const handleChange = (e) => {
        setFormData({...formData, type: e.target.value})
    }
    const onUrlChange = (e) => {
        setFormData({...formData, url: e.target.value})
    }

  return (
    <Box className="flex justify-between items-center gap-1">
        <Select
            className='w-32 h-10'
            value={formData.type}
            label="POST"
            onChange={(e) => handleChange(e)}
        >
            <MenuItem value={'POST'}>POST</MenuItem>
            <MenuItem value={'GET'}>GET</MenuItem>
            <MenuItem value={'PUT'}>PUT</MenuItem>
            <MenuItem value={'DELETE'}>DELETE</MenuItem>
        </Select>
        <TextField size='small' className={classes.textField} onChange={(e) => onUrlChange(e)} />
        <Button variant='contained' onClick={() => onRequestSubmit()} className="text-black hover:text-white w-32 h-10">Send</Button>
    </Box>
  )
}

export default Form