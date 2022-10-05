import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import Order from './Order';
import axios from 'axios';

const MyOrder = () => {

    const [deleteOrder, setDeleteOrder] = useState(null);    

    const { isLoading, error, data } = useQuery(["orders"], () => axios.get('https://floating-dusk-82041.herokuapp.com/allorders')
    )

    const orders = data?.data;   

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>Manage All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

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
                        { orders &&
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