import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const [users] = useAuthState(auth)

  const from = location.state?.from?.pathname || "/";

  if (user) {

    const email = users.email;
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('accessToken', data.accessToken)
      })
            
    navigate(from)
  }

  return (
    <div className='flex flex-wrap'>
      <button onClick={() => signInWithGoogle()} className='btn btn-warning mr-4'>Google</button>
      <button onClick={() => signInWithFacebook()} className='btn btn-info mr-4'>Facebook</button>
      <button className='btn btn-dark'>GitHub</button>
    </div>
  );
};

export default SocialLogin;