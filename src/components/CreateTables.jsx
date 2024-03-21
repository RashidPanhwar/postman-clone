import React, {useState} from 'react'

// Material UI
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Components
import AddRows from './AddRows'


const useStyle = makeStyles({
    tableCell: {
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important']
    }
})

const CreateTables = ({text, data, setData}) => {
    const classes = useStyle()
    const [rows, addRows] = useState([0])
  return (
    <Box>
        <Typography mt={2} mb={2} className='text-sm'> {text}</Typography>
        <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}></TableCell>
            <TableCell className={classes.tableCell} >Keys</TableCell>
            <TableCell className={classes.tableCell} >Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, index) => {
              return <AddRows key={index} rowId={index} addRow={addRows} data={data} setData={setData} />
            })}
        </TableBody>
      </Table>
    </Box>
  )
}

export default CreateTables