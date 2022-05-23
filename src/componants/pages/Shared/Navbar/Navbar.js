import React from 'react';
import Logo from '../../../../assets/img/logo.png';

const Navbar = () => {
    const menu =
        <>
            <li><a>Home</a></li>
            <li><a>Blog</a></li>
            <li><a>Login</a></li>
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
            </div>
        </div>
        </nav>
       
    );
};

export default Navbar;