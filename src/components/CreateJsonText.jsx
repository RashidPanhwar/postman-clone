import React, {useContext} from 'react'

import { DataContext } from '@/context/DataProvider'

const CreateJsonText = () => {
  const {setJsonText} = useContext(DataContext);
  const onValueChange = (e) => {
    setJsonText(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <h2 className='mt-2 mb-2 text-sm'>JSON</h2>
      <textarea
      className="flex resize-y p-3 border-2 w-full"
      onChange={(e) => onValueChange(e)}
      placeholder="Enter JSON text here..."
    />
    </>
  );
}

export default CreateJsonText