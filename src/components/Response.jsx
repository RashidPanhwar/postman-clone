import React from 'react'

// Material UI
import { Box, Typography, TextareaAutosize } from '@mui/material'



const  textAreaStyle = {
  width: '100%',
  padding: '10px',
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: 'local',
  backgroundRepeat: 'no-repeat',
  border: '1px solid rgba(224, 224, 224, 1)',
  paddingLeft: 35,
  paddingTop: 10,
  fontSize: 12,
  borderColor: '#ccc'
  
}

const Response = ({ data }) => {

  let obj = data;
  let readAbleObj = '{\n';
  for(let key in obj){
    readAbleObj += '\t'
    readAbleObj += (typeof obj[key] ===  'string') ? `${key}: "${obj[key]}"` : `${key}: "${obj[key]}"` 
    if(Object.keys(obj).pop() !== key.toString()){
      readAbleObj += ',\n' 
    }
  }
  readAbleObj += '\n}'

  return (
    <Box>
      <Typography mt={2} mb={2} className={`text-lg`}> Response </Typography>
      <TextareaAutosize
          minRows={3}
          maxRows={5}
          style={textAreaStyle}
          disabled='disabled'
          value={readAbleObj}
        />
    </Box>
  )
}

export default Response