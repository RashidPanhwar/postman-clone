"use client"
import React, {useState, useContext} from 'react'

import { DataContext } from '@/context/DataProvider'

// Material UI
import { makeStyles } from '@mui/styles'
import { Box, Tabs, Tab } from '@mui/material'

// Components
import CreateTables from './CreateTables'
import CreateJsonText from './CreateJsonText'


const useStyle = makeStyles({
    tab: {
        textTransform: ['none', '!important']
    }
})

const SelectTabs = () => {

    const {paramData, setParamData, headerData, setHeaderData} = useContext(DataContext)

    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const classes = useStyle();

  return (
    
    <Box className="mt-5" >
        <Tabs 
            value={value} 
            TabIndicatorProps={{ sx: { backgroundColor: '#F26B3A', height: 3, bottom: 6 } }}
            textColor='#F26B3A'
            onChange={handleChange} 
        >
            <Tab label="Params" className={`${classes.tab}`} />
            <Tab label="Header" className={`${classes.tab}`} />
            <Tab label="Body" className={`${classes.tab}`} />
        </Tabs>
        <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-${0}`}
            aria-labelledby={`simple-tab-${0}`}
            >
                <CreateTables text={'Query Params'} data={paramData} setData={setParamData} />
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-${1}`}
            aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTables text={'Headers'} data={headerData} setData={setHeaderData} />
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-${2}`}
            aria-labelledby={`simple-tab-${2}`}
            >
                <CreateJsonText />
        </Box>
    </Box>
  )
}

export default SelectTabs