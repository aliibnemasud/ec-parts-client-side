import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-center font-bold text-5xl'>Welcome to my My Portfolio</h1>

            <div class="card w-1/2 bg-base-100 shadow-xl mx-auto my-20">
                <div class="card-body">
                    <h2 class="card-title">My Expertise area</h2>
                    <p>I have learning javascript from this course. I have learned lots of things from here.
                        like Html, css, bootstrap, tailwind, javascript, React, React Router, Firebase, Node, Node Express, Mongodb etc.
                        I want to be self-directed, and motivated full stack web develope.

                        If need someone to contact with me please call "+8801785748248" and my email is "aliibnemasud@gmail.com" Thanks.</p>
                </div>
            </div>

            <div className='card w-1/2 bg-base-100 shadow-xl mx-auto my-20'>
                <div class="card-body">
                    <h1 className='text-3xl font-bold text-center my-10'>My Three best websites Here you </h1>
                    <div className='flex justify-around'>
                        <a className='btn btn-primary' href="https://warehouse-management-web-d5f96.web.app/">Cycle Store Management</a>
                        <a className='btn btn-primary' href="https://product-analysis-website-aliibnemasud.netlify.app/">Book Analysis Website</a>
                        <a className='btn btn-primary' href="https://product-analysis-website-aliibnemasud.netlify.app/">Mind Trainer</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;