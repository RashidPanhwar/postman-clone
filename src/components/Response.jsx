import React from 'react'

const Response = ({ data, reqTime, reqStatus, reqLength }) => {

  const readableObj = JSON.stringify(data, null, 2);

  return (
    <div className="flex flex-col mt-5">
      <div className="mb-1">Response</div>
      <div className='flex gap-5'>
          <p>Status : {reqStatus} </p>
          <p>time : {reqTime} </p>
          <p>Length : {reqLength} </p>
      </div>
      <textarea
        className="h-40 resize-y p-2 border-2"
        placeholder="Response text..."
        disabled='disabled'
        value={readableObj}
      />
    </div>
  )
}

export default Response