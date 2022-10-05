import React from 'react';
import Contact from '../../../assets/img/contact.png';

const Contactus = () => {
    return (
        <div className='contactUs'>
            <div className='max-w-7xl mx-auto py-10'>

                <div className='flex justify-between items-center flex-wrap'>
                    <div className='flex-1'>
                        <h1 className='text-4xl font-bold uppercase'>Contact <span className='text-primary'>Us</span></h1>
                        <img src={Contact} alt="" className='p-20' />
                        {/* <p className='text-2xl'>aliibnemasud@gmail.com | <a className=' text-blue-600' href="https://portfolio.aliibne.com/">portfolio.aliibne.com</a> </p>
        <p className='text-2xl mt-2'>+8801785748248 | Mirpur, Dhaka, Bangladesh</p> */}
                    </div>

                    <form action="" className='flex-1 px-10'>
                        <label class="block">
                            <span class="block text-slate-700 my-5 font-bold">Your Name</span>
                            <input type="text" className='input input-bordered w-full' placeholder='Your name' />
                        </label>
                        <label class="block">
                            <span class="block text-slate-700 my-5 font-bold">Your Email</span>
                            <input type="email" className='input input-bordered w-full' placeholder='email' />
                        </label>
                        <label class="block">
                            <span class="block text-slate-700 my-5 font-bold">Your Message</span>
                            <textarea type="email" className='textarea textarea-bordered w-full' placeholder='Drop a line...' rows="4" />
                        </label>

                        <input type="submit" className='btn btn-primary px-10 w-full mt-5' value="Send" />


                    </form>
                </div>



            </div>
        </div>

    );
};

export default Contactus;