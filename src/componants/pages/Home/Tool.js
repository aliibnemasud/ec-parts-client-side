import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {

    const navigate = useNavigate();

    const navigateToToolsdetails = _id => {
        navigate(`/tools/${_id}`)
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={tool.img} className="ml-4 w-auto" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{tool?.name}</h2>
                <p>Description: {tool?.desc}</p>
                <h3 className='text-2xl text-primary'>Price: ${tool?.price}</h3>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToToolsdetails(tool._id)} className="btn btn-primary text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;