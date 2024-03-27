"use client"
import React, {useState, useContext} from 'react'

import { DataContext } from '@/context/DataProvider'

// Components
import CreateTables from './CreateTables'
import CreateJsonText from './CreateJsonText'


const SelectTabs = () => {

    const {paramData, setParamData, headerData, setHeaderData} = useContext(DataContext)

    const [activeTab, setActiveTab] = useState('Params');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

return (
    <div className="mt-5">
        <div className="flex border-b-2">
            <div
                className={`py-3 px-4 cursor-pointer ${activeTab === 'Params' ? 'active' : ''}`}
                onClick={() => handleTabClick('Params')}
            >
                Params
            </div>
            <div
                className={`py-3 px-4 cursor-pointer ${activeTab === 'Header' ? 'active' : ''}`}
                onClick={() => handleTabClick('Header')}
            >
                Header
            </div>
            <div
                className={`py-3 px-4 cursor-pointer ${activeTab === 'Body' ? 'active' : ''}`}
                onClick={() => handleTabClick('Body')}
            >
                Body
            </div>
        </div>
        <div className="tab-content">
            {activeTab === 'Params' && <CreateTables text={'Query Params'} data={paramData} setData={setParamData} />}
            {activeTab === 'Header' && <CreateTables text={'Headers'} data={headerData} setData={setHeaderData} />}
            {activeTab === 'Body' && <CreateJsonText />}
        </div>
    </div>
);
}

export default SelectTabs