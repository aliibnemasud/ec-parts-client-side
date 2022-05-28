import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init';
import {useAuthState }from 'react-firebase-hooks/auth';

const Myprofile = () => {
    
    const [user, loading, error] = useAuthState(auth);
    
    if(loading){
        return loading;
    }
    
    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>My Profile!</h1>

            <h1>Name: {user?.displayName}</h1>
            <h1>Name: {user?.email}</h1>


        </div>
    );
};

export default Myprofile;