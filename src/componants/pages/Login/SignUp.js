import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import Contact from '../../../assets/img/contact.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';


const SignUp = () => {

    const navigate = useNavigate();    

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');



    const handCreateAccount = async (e) => {       
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile(name);
        
        // Storing the access token to the local storage
       fetch ('http://localhost:5000/login', {
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
    
    if(loading || updating){
        return <Loading></Loading>
    }
    if(user){
        navigate('/');
    }

    return (
        <div className='max-w-7xl mx-auto my-32'>

            <div className='flex  justify-center items-center'>
                <div className='flex-1 text-center'>
                    <h1 className='text-5xl font-bold'>Sign Up</h1>
                    <p className='text-primary my-4'>Join our community and explore</p>
                    <img src={Contact} className="w-auto mt-6 ml-10" alt="" />
                </div>

                <p></p>
                <div className='flex-1'>
                    <form onSubmit={handCreateAccount}>
                        <input ref={nameRef} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-4" required /> <br />
                        <input ref={emailRef} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mb-4" required /> <br />
                        <input ref={passwordRef} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mb-4" required /> <br />
                        <input type="submit" value="Sign Up" className="input text-white input-bordered btn-primary w-full max-w-xs mb-4" /> <br />
                        <label>
                            Already have an account? <Link to="/login" className='text-primary'>Login</Link>
                        </label>
                    </form>
                    <div className="divider w-80">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default SignUp;