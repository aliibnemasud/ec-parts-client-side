import React, { useEffect, useState } from 'react';
import PrimaryBtn from '../Shared/Buttons/PrimaryBtn';
import Tool from './Tool';


const Tools = () => {
    const [tools, setTools] = useState([]);
    
    useEffect(()=> {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
           <h1 className='text-4xl text-center my-16 font-bold uppercase'>Cycle <span className='text-primary'>Tools</span></h1>

           <div className='grid grid-cols-2 gap-4'> 

               {
                   tools.map(tool =><Tool key={tool._id} tool={tool}></Tool>)
               }      

           </div>
           <div className="my-10 text-center">
           <PrimaryBtn>Load More</PrimaryBtn>
           </div>
           
        </div>
    );
};

export default Tools;