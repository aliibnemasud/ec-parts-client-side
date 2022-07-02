import React from 'react';
import Contact from '../../../assets/img/contact.png';

const Contactus = () => {
    return (
        <div className='my-32'>
            <h1 className='text-4xl text-center my-16 font-bold uppercase'>Contact <span className='text-primary'>Us</span></h1>

            <div className="hero">
                <div className="hero-content">                    
                        <img src={Contact} alt="" />                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Drop a line..</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>                             
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Sent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;