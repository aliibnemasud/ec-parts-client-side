import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';
import SocialLogin from './SocialLogin';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    if (loading) {
        return <button className="btn btn-square loading"></button>
    }
    
    if(user){
        navigate(from)
    }

    let loginError;

    if(error){
        
        loginError = <p className=' text-red-600'>{error?.message}</p>
    }    

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       signInWithEmailAndPassword(email, password)

       // Storing the access token to the local storage
       
       fetch ('https://ec-cycle-parts.onrender.com/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email}) 
       })
       .then(res => res.json())
       .then(data => {        
        localStorage.setItem('accessToken', data.accessToken)
       })
       
    }

    
    return (
        <div className='max-w-7xl mx-auto my-32'>

            <div className='flex  justify-center items-center'>
                <div className='flex-1 text-center'>
                    <h1 className='text-5xl font-bold'>Login Now</h1>
                    <p className='text-primary mt-4'>Please login and explore</p>
                </div>

                <p></p>
                <div className='flex-1'>
                    <form onSubmit={handleLogin}>
                        <input ref={emailRef} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mb-4" required /> <br />
                        <input ref={passwordRef} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mb-4" required /> <br />
                        <input type="submit" value="Login" className="input text-white input-bordered btn-primary w-full max-w-xs mb-4" /><br />
                        
                        {loginError}

                        <label>
                            Don't have an account? <Link to="/signup" className='text-primary'>Sign Up</Link>
                        </label>
                    </form>
                    <div className="divider w-80">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Login;