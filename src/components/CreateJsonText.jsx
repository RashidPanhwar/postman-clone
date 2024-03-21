import React, {useContext} from 'react'

// Material UI
import { Box, Typography, TextareaAutosize } from '@mui/material'

import { DataContext } from '@/context/DataProvider'


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

const CreateJsonText = () => {
  const {setJsonText} = useContext(DataContext);
  const onValueChange = (e) => {
    setJsonText(e.target.value)
  }
  return (
    <Box>
        <Typography mt={2} mb={2} className='text-sm'>JSON</Typography>
        <TextareaAutosize
            minRows={3}
            maxRows={5}
            style={textAreaStyle}
            onChange={(e) => onValueChange(e)}
        />
    </Box>
  )
}

export default CreateJsonText