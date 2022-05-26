import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Order from './Order';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders?email=${user?.email}`).then(res =>
            res.json()
        )
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
                            orders.map(order => <Order order={order} ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;