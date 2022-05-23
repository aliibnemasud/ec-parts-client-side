import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import Contact from '../../../assets/img/contact.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {

    const navigate = useNavigate()

   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
   

   const emailRef = useRef('');
   const passwordRef = useRef('');
   

   const handCreateAccount = e => {
       e.preventDefault();
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       // console.log(email, password)
       createUserWithEmailAndPassword(email, password);
       navigate('/')
       
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
                        <input ref={emailRef} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs mb-4" /> <br />
                        <input ref={passwordRef} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs mb-4" /> <br />
                        <input type="submit" value="Login" class="input text-white input-bordered btn-primary w-full max-w-xs mb-4" /> <br />
                        <label>
                            Already have an account? <Link to="/login" className='text-primary'>Login</Link>
                        </label>
                    </form>
                    <div class="divider w-80">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default SignUp;