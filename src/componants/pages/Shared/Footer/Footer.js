import React from 'react';
import Logo from '../../../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer class="bg-base-100 text-base-content mt-16 h-screen">
            <div className='footer max-w-7xl mx-auto'>
                <div>
                    <img src={Logo} alt="" />
                    <p>ECPARTS Industries Ltd.<br />Providing reliable tech since 2011</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='bg-primary py-4 mt-5'>
                <p className='text-center text-white'>All Right reserved  - 2022</p>
            </div>
        </footer>
    );
};

export default Footer;