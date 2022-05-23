import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/img/logo.png';
import auth from '../../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const menu =
        <>
            <li><CustomLink to="/">Home</CustomLink></li>
            <li><CustomLink to="/blog">Blog</CustomLink></li>       

        </>
    return (

        <nav className='bg-base-100 py-5'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <img src={Logo} alt="ECParts" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered" />
                    </div>

                     {/* profile img */}

                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar border-l">
                            <div class="w-10 rounded-full">
                                {user?.uid ? <img src={user?.photoURL} /> : <img src="https://api.lorem.space/image/face?hash=33791"/> }
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li> {user?.uid ? <button className='btn btn-secondary' onClick={() => signOut(auth)} >Sing Out</button> : <button className='btn btn-primary' onClick= {() => navigate('/login')} >Login</button>} </li>
                        </ul>
                    </div>

                    {/* profile img */}
                </div>
            </div>
       
        </nav >
       
    );
};

export default Navbar;