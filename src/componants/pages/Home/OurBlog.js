import React from 'react';

const OurBlog = ({blog}) => {
   const {title, img, desc} = blog
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img}  alt="Shoes" class="rounded-xl h-52" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{desc}</p>
                <div class="card-actions">
                    <button class="btn btn-primary btn-sm text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;