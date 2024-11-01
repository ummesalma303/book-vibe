import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center text-center items-center'>
            <div>
            <h2 className='text-5xl font-playFair font-bold'>Page Not found</h2>
            <p className='text-2xl font-playFair font-medium'>Status: 404</p>
           </div>
        </div>
    );
};

export default ErrorPage;