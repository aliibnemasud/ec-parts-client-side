import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import Order from './Order';

const MyOrder = () => {
    const token = localStorage.getItem('accessToken');
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);
    const navigate = useNavigate();   

    const { isLoading, error, data: orders } = useQuery(['orders'], () =>
        fetch(`https://floating-dusk-82041.herokuapp.com/orders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())        
    )

    /* const sendToken = {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }

    console.log(sendToken)

    const {isLoading, data: orders} = useQuery(["myOrders"], () => axios.get(`https://floating-dusk-82041.herokuapp.com/orders?email=${user?.email}`, sendToken));
    */

    if(isLoading){
        return <Loading></Loading>
    }

    let myOrder = [];  

    if(!token){
        signOut(auth)
        navigate('/login')
    }

    else if(token){
        myOrder = orders;
    }    

    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>My Orders</h1>
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
                        { 
                            myOrder.map((order, index) => <Order 
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