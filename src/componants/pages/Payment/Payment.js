import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const { orderid } = useParams();
    
    const [order, setOrder] = useState([]);
    const { name, totalPrice, quantity } = order;

    useEffect(() => {
        const url = `https://ec-cycle-parts.onrender.com/order/${orderid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className=' my-10'>
            <h1 className='text-center text-4xl font-bold'>Make your Payment</h1>

           
            <div className="card w-96 bg-base-200 shadow-xl mx-auto text-primary-content mt-9">
                <div className="card-body">
                    <h2 className="card-title">Product: {name}</h2>
                    <div className='flex justify-between items-center'>
                    <p>Quantity: {quantity}</p>
                    <p>Total Price: {totalPrice}</p>
                    </div>                  
                </div>
            </div>


            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;