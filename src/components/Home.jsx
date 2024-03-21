"use client"
import React, {useContext, useState} from 'react'

import { DataContext } from '@/context/DataProvider'
import {checkParams} from '../utils/CommonUtils'
import {getData} from '@/servise/api'
// Material UI 
import { Box } from '@mui/material'


// Components


import Header from './Header'
import Form from './Form';
import SelectTab from './SelectTabs'
import Response from './Response'
import ErrorScreen from './ErrorScreen'
import ErrorTost from './ErrorTost'


const Home = () => {


  const {paramData, headerData, jsonText, formData } = useContext(DataContext) 

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const onRequestSubmit = async () => {
    if(!checkParams(paramData, headerData, jsonText, formData, setErrorMsg )){
      setError(true)
      return false;
    }

    let response = await getData(paramData, headerData, jsonText, formData);
    if(response === 'error'){
      setErrorResponse(true);
      return;
    }
    setErrorResponse(false)
    setApiResponse(response.data);
  } 
  return (
    <>
      <Header />
      <Box className="w-3/5 mt-5 ml-auto mb-0 mr-auto">
        <Form onRequestSubmit={onRequestSubmit} />
        <SelectTab />
        {errorResponse ? <ErrorScreen /> : <Response data={apiResponse} /> }
        {error && <ErrorTost error={error} setError={setError} errorMsg={errorMsg} />}
      </Box>
    </>
  )
}

export default Home;
