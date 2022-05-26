import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
        
    const [token] = useToken(user);
    return (
        <div className='flex flex-wrap'>
          <button onClick={() => signInWithGoogle()} className='btn btn-warning mr-4'>Google</button>
          <button onClick={() => signInWithFacebook()} className='btn btn-info mr-4'>Facebook</button>  
          <button className='btn btn-dark'>GitHub</button>  
        </div>
    );
};

export default SocialLogin;