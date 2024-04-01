import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
  const {_id, totalPrice, userName, email} = order;
  const stripe = useStripe();
  const elements = useElements();
  const [cardEroor, setCardEroor] = useState('');
  const [clientSecret, setClientSecret ] = useState('');

  const [success, setSuccess] = useState('');

  useEffect(()=>{
  if(totalPrice){
    fetch('https://ec-cycle-parts.onrender.com/create-payment-intent', {
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },      
      body: JSON.stringify({totalPrice}),
    })
    .then(res => res.json())
    .then(data => {
      if(data?.clientSecret){
        setClientSecret(data.clientSecret)
      }
    })
  }
  }, [totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault()    

    if (!stripe || !elements ) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setCardEroor(error)
    }
    else {
      setCardEroor('')
    }
    setSuccess('')
    // Confirming the payment
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email
          },
        },
      },
    );

    if(intentError){     
      setCardEroor(intentError?.message);
    }
    else{
      setSuccess('Congrats your payment has been succeed!');
      console.log(paymentIntent);

      // Payment 
      const payment = {
        orderId: _id,
        transactionId: paymentIntent.id,
        amountTotal: totalPrice,
      }


      // send the data to database
      fetch(`https://ec-cycle-parts.onrender.com/order/${_id}`, {
        method: 'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment) 
      })
      .then(res => res.json())
      
      .then(data  => {
        console.log(data)
      })


      
    }    

  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-primary mt-5 w-full' disabled={!stripe || !clientSecret}>Pay</button>
       <p className='text-red-600 mt-3'>{cardEroor?.message}</p>
       {
         success && <p className='text-green-600 mt-3'>{success}</p>
       }
    </form>
  );
};

export default CheckoutForm;