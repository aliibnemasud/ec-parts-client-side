import React from 'react';
import Order from './Order';

const MyOrder = () => {
    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>My Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Ali Ibne Masud</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>                       
                         <Order></Order>                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;