import React from "react";

const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png';

    return (
        <div>
            <h2 mt={2} mb={2}>Response</h2>
            <div className='flex'>
                <img src={error} alt="error" className="w-4/5 h-auto object-center m-auto" />
            </div>
        </div>
    )
}

export default ErrorScreen;