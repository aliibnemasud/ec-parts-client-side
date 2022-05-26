import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import Order from './Order';

const MyOrder = () => {

    const [deleteOrder, setDeleteOrder] = useState(null);

    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders`)
        .then(res =>res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }
    console.log(orders)

    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>My Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <Order 
                                order={order}
                                index={index}
                                setDeleteOrder={setDeleteOrder}
                                ></Order>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder}></DeleteOrderModal>}
        </div>
    );
};

export default MyOrder;