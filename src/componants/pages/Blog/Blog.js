import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-center font-bold text-5xl my-10'>Welcome to my Blogs</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">01. How will you improve the performance of a React Application?</h2>

                        <p>We can use hooks for different types of function need without over writing code. Also we can send the only the necessary props for components to receive. It will make less CPU consumption and avoid over-rendering. Function and hooks it the batter solution make the react application faster.</p>
                    </div>
                </div>

                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">02. What are the different ways to manage a state in a React application?</h2>
                        <p>We can manage state in different  ways in react. By using Redux it is very easy put all their state that seems great at first in a single place. Also, there many other ways to manage the state.</p>
                    </div>
                </div>

                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">03. How does prototypical inheritance work?</h2>
                        <p>It is a feature of javascript. Javascript used to add methods and properties in objects which an object can inherit the properties and methods of another object. By prototyping inheritance we can share the properties an object to another.</p>
                    </div>
                </div>

                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">04. Why you do not set the state directly in React ?</h2>
                        <p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br />
                            But when we use useState(“”) it will just replace the value immediately for us.
                        </p>
                    </div>
                </div>

                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">05. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                       <a href='https://i.ibb.co/PDgHNtT/Screenshot-10.png' className='btn btn-primary'>Click Here to see the code</a>
                    </div>
                </div>

                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">06. What is unit testing?</h2>
                        <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.</p>
                    </div>
                </div>

                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">07. Why should write unit tests?</h2>
                        <p>For decrease defects and expose them early in the development lifecycle. Increase code readability. Enable code reuse and improve deployment velocity.</p>
                    </div>
                </div>               

            </div>

        </div>
    );
};

export default Blog;

