import React from 'react';

const Tool = ({tool}) => {
    
    
    
    return (
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src={tool.img} className="ml-4 w-auto" /></figure>
            <div class="card-body">
                <h2 class="card-title uppercase">{tool?.name}</h2>
                <p>Description: {tool?.desc}</p>
                <h3 className='text-2xl text-primary'>Price: ${tool?.price}</h3>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;