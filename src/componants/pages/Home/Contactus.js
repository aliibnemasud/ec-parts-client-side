import React from 'react';
import Contact from '../../../assets/img/contact.png';

const Contactus = () => {
    return (
        <div className='my-32'>
            <h1 className='text-4xl text-center my-16 font-bold uppercase'>Contact <span className='text-primary'>Us</span></h1>

            <div class="hero">
                <div class="hero-content lg:flex-row">
                    <div class="text-center lg:text-left">
                        <img src={Contact} alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                        <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Drop a line..</span>
                                </label>
                                <textarea class="textarea textarea-bordered" placeholder="Message"></textarea>                             
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary text-white">Sent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;