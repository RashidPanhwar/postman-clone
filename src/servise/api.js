import axios from 'axios'
import {getHeaderAndParamsData} from '../utils/CommonUtils'

export const getData = async (paramData, headerData, jsonText, formData) => {
    const apiType = formData.type.toLowerCase();
    const apiUrl = formData.url;
    const apiHeader = getHeaderAndParamsData(headerData);
    const apiParams = getHeaderAndParamsData(paramData);
    try {
        return await axios({
            method: apiType,
            url: apiUrl,
            data: jsonText,
            headers: apiHeader,
            params: apiParams
        })

    } catch (error) {
        console.log("Error while calling get data", error)
        return 'error';
    }
}





