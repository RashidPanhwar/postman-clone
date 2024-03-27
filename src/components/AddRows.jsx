import React, {useState} from 'react'

const AddRows = ({addRow, rowId, data, setData}) => {

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
    <tr className="w-full">
        <td className='border-2 border-collapse py-2 px-1'>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => onChecked(e)}
            name={rowId}
            className="py-1 px-2"
          />
        </td>
        <td className='border-2 border-collapse py-2 px-1'>
        <input
            type="text"
            placeholder="Key"
            onChange={(e) => onTextChange(e)}
            className='w-full outline-none border-2 py-1 px-2'
            name='key'
          />
        </td>
        <td className='border-2 border-collapse py-2 px-1'>
        <input
            type="text"
            placeholder="Value"
            onChange={(e) => onTextChange(e)}
            className='w-full outline-none border-2 py-1 px-2'
            name='value'
          />
        </td>
    </tr>
  );
}

export default AddRows