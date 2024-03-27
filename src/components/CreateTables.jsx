import React, {useState} from 'react'

// Components
import AddRows from './AddRows'

const CreateTables = ({text, data, setData}) => {
    const [rows, addRows] = useState([0])
  return (
    <div className='w-full '>
        <h2 className='text-sm mt-2 mb-2'> {text}</h2>
        <table className='w-full border-2' >
        <thead>
          <tr>
            <td className="border-2 border-collapse py-2 px-1"></td>
            <td className="border-2 border-collapse py-2 px-1" >Keys</td>
            <td className="border-2 border-collapse py-2 px-1" >Value</td>
          </tr>
        </thead>
        <tbody>
            {rows.map((row, index) => {
              return <AddRows key={index} rowId={index} addRow={addRows} data={data} setData={setData} />
            })}
        </tbody>
      </table>
    </div>
  )
}

export default CreateTables