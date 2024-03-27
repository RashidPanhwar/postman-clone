import React from 'react';

const ErrorToast = ({ error, setError, errorMsg }) => {
  const handleClose = () => {
    setError(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-red-500 text-white p-3 text-center ${
        error ? 'block' : 'hidden'
      }`}
    >
      {errorMsg}
      <button className="ml-2" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default ErrorToast;