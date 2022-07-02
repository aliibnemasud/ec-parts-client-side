import React, { useEffect, useState } from 'react';
import OurBlog from './OurBlog';
import PrimaryBtn from '../Shared/Buttons/PrimaryBtn';

const OurBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto my-32'>
            <h1 className='text-4xl text-center my-16 font-bold uppercase'>Our <span className='text-primary'>Blogs</span></h1>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map(blog => <OurBlog key={blog._id} blog={blog}> </OurBlog>)
                }
            </div>

            <div className="my-10 text-center">
                <PrimaryBtn>See More</PrimaryBtn>
            </div>

        </div>
    );
};

export default OurBlogs;