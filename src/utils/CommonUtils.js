const checkValidJson = (text) => {
    if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
    }else {
        return false;
    }
}

// const checkValidJson = (text) => {
//     try {
//         JSON.parse(text);
//         return true;
//     } catch (error) {
//         return false;
//     }
// }

export const checkParams = (paramData, headerData, jsonText, formData, setErrorMsg) => {
    if(!formData.url){
        setErrorMsg("Request url is empty")
        return false;
    }

    if(!checkValidJson(jsonText)){
        setErrorMsg("Text is not valid json")
        return false;
    }

    return true
}

export const getHeaderAndParamsData = (objArr) => {
    let obj = {};
    objArr.forEach(data => {
        if(data.hasOwnProperty('check') && data.check){
            obj = {...obj, [data.key]: data.value}
        }
    });
    return obj
}