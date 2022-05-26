import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts';

const Manageproduct = () => {

    const [tools, setTools] = useState([]);
    
    useEffect(()=> {
        fetch('https://floating-dusk-82041.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>Manage User</h1>
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
                            ></AllProducts>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder}></DeleteOrderModal>} */}
        </div>
    );
};

export default Manageproduct;