import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts';
import DeleteProductModal from './DeleteProductModal';

const Manageproduct = () => {

    const [tools, setTools] = useState([]);

    const [deleteTools, setDeleteTools] = useState(null);
    
    useEffect(()=> {        

         fetch('https://ec-cycle-parts.onrender.com/tools')
        .then(res => res.json())
        .then( data =>  setTools(data))
    }, [tools])

    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>Manage Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>                            
                            <th>Manage</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <AllProducts
                                tool={tool}
                                index={index}
                                setDeleteTools = {setDeleteTools}                                
                            ></AllProducts>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteTools &&  <DeleteProductModal deleteTools={deleteTools} ></DeleteProductModal>}
        </div>
    );
};

export default Manageproduct;