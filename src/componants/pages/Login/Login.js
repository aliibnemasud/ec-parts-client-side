import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    
    return (
        <div className='max-w-7xl mx-auto my-32'>

            <div className='flex  justify-center items-center'>
                <div className='flex-1 text-center'>
                    <h1 className='text-5xl font-bold'>Login Now</h1>
                    <p className='text-primary mt-4'>Please login and explore</p>
                </div>

                <p></p>
                <div className='flex-1'>
                    <form action="">
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs mb-4" /> <br />
                        <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs mb-4" /> <br />
                        <input type="submit" value="Login" class="input text-white input-bordered btn-primary w-full max-w-xs mb-4" /> <br />
                        <label>
                            Don't have an account? <Link to="/signup" className='text-primary'>Sign Up</Link>
                        </label>
                    </form>
                    <div class="divider w-80">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Login;