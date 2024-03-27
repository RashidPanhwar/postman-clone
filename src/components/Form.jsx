"use client"
import React, {useContext} from 'react'

// State management with Context
import { DataContext } from '@/context/DataProvider'

const Form = ({onRequestSubmit}) => {
    // Form value get
    const {formData, setFormData} = useContext(DataContext);
    const handleChange = (e) => {
        setFormData({...formData, type: e.target.value})
    }
    const onUrlChange = (e) => {
        setFormData({...formData, url: e.target.value})
    }

  return (
    <div className='flex justify-between items-center w-full gap-1 '>
                <select className='w-32 h-10' value={formData.type} onChange={(e) => handleChange(e)}>
                    <option value={'POST'}>POST</option>
                    <option value={'GET'}>GET</option>
                    <option value={'DELETE'}>DELETE</option>
                    <option value={'UPDATE'}>UPDATE</option>
                </select>
                <input className='p-2 w-full bg-[#F6F6F6] border-2 border-gray-300 outline-none'
                    type='text' placeholder='Enter URL' onChange={(e) => onUrlChange(e)} />
                <button onClick={() => onRequestSubmit()} 
                    className="text-black bg-blue-600 rounded-sm hover:text-white w-32 h-10">Submit</button>
            </div>
  )
}

export default Form