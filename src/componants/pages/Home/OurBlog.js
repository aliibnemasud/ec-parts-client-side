import React from 'react';

const OurBlog = ({blog}) => {
   const {title, img, desc} = blog
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img}  alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions">
                    <button className="btn btn-primary btn-sm text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;