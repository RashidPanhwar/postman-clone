import React, {useState} from 'react'

// Material UI
import {TableRow, TableCell, Checkbox, TextField} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { root } from 'postcss'

const useStyle = makeStyles({
    tableCell: {
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important']
    },
    checkBox: {
        padding: ['2px 5px', '!important']
    },
    textField: {
        width: '100%',
        outline: ['none', '!important'],
        
    }
})

const AddRows = ({addRow, rowId, data, setData}) => {
    const classes = useStyle()

    const [isChecked, setIsChecked] = useState(false)
    const onChecked = (e) => {

        let result = data.filter(entry => entry.id === Number(e.target.name))[0];

        if(!isChecked){
            setIsChecked(true)
            addRow(oldArr => [...oldArr, rowId])
            result = {...result, id: rowId, check: true}
        }else {
            setIsChecked(false)
            result = {...result, id: rowId, check: false}
        }

        let index = data.findIndex(value => value.id === Number(e.target.name))
        if(index === -1){
            setData(oldArr => [...oldArr, result])
        }else {
            const newArray = Object.assign([...data], {[index]: result})
            setData(newArray)
        }
    }

    const onTextChange = (e) => {
        // console.log(e.target.name, e.target.value)
        let result = data.filter(entry => entry.id === rowId)[0];
        result = {...result, id:rowId, [e.target.name]: e.target.value};

        let index = data.findIndex(value => value.id === rowId)
        if(index === -1){
            setData(oldArr => [...oldArr, result])
        }else {
            const newArray = Object.assign([...data], {[index]: result})
            setData(newArray)
        }
        console.log(data)
    }
  return (
    <TableRow>
        <TableCell className={classes.tableCell} >
            <Checkbox 
                checked={isChecked}
                size='small'
                className={classes.checkBox}
                onChange={(e) => onChecked(e)}
                name={rowId}
            />
        </TableCell>
        <TableCell className={classes.tableCell} >
            <TextField 
                inputProps={{ style: { height: 30, padding: '0 5px' } }} 
                className={`${classes.textField}`}
                onChange={(e) => onTextChange(e)}
                name='key'
            />
        </TableCell>
        <TableCell className={classes.tableCell} >
            <TextField 
                inputProps={{ style: { height: 30, padding: '0 5px' } }} 
                className={`${classes.textField}`} 
                onChange={(e) => onTextChange(e)}
                name='value'
            />
        </TableCell>
    </TableRow>
  )
}

export default AddRows