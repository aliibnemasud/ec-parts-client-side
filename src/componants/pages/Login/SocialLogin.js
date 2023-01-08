import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fuser,, error] = useSignInWithFacebook(auth);
  const [signInWithGithub, gitUser,,] = useSignInWithGithub(auth);
  
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const [users] = useAuthState(auth);  

  const from = location.state?.from?.pathname || "/";

  if(loading){
    return <button className="btn btn-square loading"></button>
  }  

  if (user || fuser || gitUser) {
    
    const email = users.email;

    fetch('https://ec-cycle-parts.onrender.com/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from)
      })    
  } 

  return (
    <div className='flex flex-wrap'>
      <button onClick={() => signInWithGoogle()} className='btn btn-warning mr-4'>Google</button>
      <button onClick={() => signInWithFacebook()} className='btn btn-info mr-4'>Facebook</button>
      <button onClick={() => signInWithGithub()} className='btn btn-dark'>GitHub</button>
    </div>
  );
};

export default SocialLogin;