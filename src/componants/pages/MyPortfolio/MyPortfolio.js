import React from 'react';
import ali from '../../../assets/img/ali.png';

const MyPortfolio = () => {




    return (
        <div className='max-w-7xl mx-auto my-20'>

            <section className='flex items-center'>
                <div className='flex-1  pr-20'>
                    <h1 className='font-bold text-4xl'>Hey, I am Ali Ibne Masud</h1>
                    <h2 class="card-title my-5">My Expertise area</h2>
                    <p>I have learning javascript from this course. I have learned lots of things from here.
                        like Html, css, bootstrap, tailwind, javascript, React, React Router, Firebase, Node, Node Express, Mongodb etc.
                        I want to be self-directed, and motivated full stack web develope.

                        If need someone to contact with me please call "+8801785748248" and my email is "aliibnemasud@gmail.com" Thanks.</p>
                </div>

                <div className='w-1/3'>
                    <img className='text-center mr-4' src={ali} alt="" />
                </div>
            </section>

            <section className=' mb-40'>

            <h1 className='text-3xl font-bold text-center my-20'>Recent three projects</h1>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/z8j08bm/Ecparts.png?w=500&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Cycle Store Management</h2>
                            <p>It is cycle store management fullstack website!</p>
                            <div class="card-actions justify-end">
                                <a className='btn btn-primary' href="https://warehouse-management-web-d5f96.web.app/" target='_blank'>Live Site</a>

                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/YQWNSBP/Screenshot-2.png?w=500&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Mind Trainer</h2>
                            <p>It is an individual services provider website. The provide services online.</p>
                            <div class="card-actions justify-end">
                                <a className='btn btn-primary' href="https://independent-service-prov-2bff1.web.app/" target='_blank'>Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/5W4d51j/Screenshot-1.png?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Book Analysis Website</h2>
                            <p>It is a site where, I have done a single product analysis!</p>
                            <div class="card-actions justify-end">
                                <a className='btn btn-primary' href="https://product-analysis-website-aliibnemasud.netlify.app/" target='_blank'>Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyPortfolio;