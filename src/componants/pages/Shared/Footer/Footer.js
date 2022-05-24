import React from 'react';
import Logo from '../../../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="bg-base-100 text-base-content mt-16">
            <div className='footer max-w-7xl mx-auto'>
                <div>
                    <img src={Logo} alt="" />
                    <p>ECPARTS Industries Ltd.<br />Providing reliable tech since 2011</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='bg-primary py-4 mt-5'>
                <p className='text-center text-white'>All Right reserved  - 2022</p>
            </div>
        </footer>
    );
};

export default Footer;