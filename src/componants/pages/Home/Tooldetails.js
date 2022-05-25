import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Tooldetails = () => {
    const { toolsid } = useParams();
    const navigate = useNavigate();

    const [tools, setProduct] = useState({});
    const { name, img, desc, price } = tools;    

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolsid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])   

    const [quantity, setquantity] = useState(null);
    const [totalPrice, setoatlPrice] = useState('');

    const [qtnError, setQtnError] = useState('')

    const handleQualtity = e => {

        const quantity = parseInt(e.target.value);
        const handletotalPrice = parseInt(quantity * price) ;
        setquantity(quantity);
        setoatlPrice(handletotalPrice);
    }

    const handaleorder = () => {
        if (quantity < 10){
            setQtnError('Quantity must Be 10 or more');            
        }

        const order = {
            name: name,
            quantity: quantity,
            price: price,
            toatlPrice: totalPrice
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            navigate('/dashboard')
        })
    }
    

    return (
        <div className='max-w-7xl mx-auto'>          
            
            <div className="flex flex-wrap justify-center my-20">
            <div className="card w-96 w-auto bg-base-100 shadow-xl mx-auto my-20">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">Minimum 10</div>
                    </h2>
                    <p>{desc}</p>

                    <h2 className="card-title">
                    Price: <span className='text-primary'>${price}</span>                        
                    </h2>                                   
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input onChange={handleQualtity} type="number" placeholder="10" className="input input-bordered" />
                            <span>Ps</span>
                        </label>
                    </div>

                </div>               
            </div>

            <div className=''>
                <h1 className='text-3xl bg-primary p-5 text-white rounded-lg'>Order Summary</h1>
                <h1 className='text-2xl my-3'>Quantity: {quantity}</h1>
                <h2 className='text-1xl mb-3'>Total Price: ${totalPrice}</h2>
                <p className='text-red-600'>{qtnError}</p>
                <button className="btn btn-primary" onClick={handaleorder}>Place Order</button>
            </div>
            </div>     

            
            
        </div>
    );
};

export default Tooldetails;