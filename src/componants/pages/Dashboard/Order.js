import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({order, setDeleteOrder, index}) => {
    const {_id, name, price, totalPrice, quantity, paid} = order;
    const navigate = useNavigate();

    const makePayment = (orderid) => {
        navigate(`/order/payment/${orderid}`)
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td> {name} </td>
            <td>$ {price}</td>
            <td>{quantity}</td>            
            <td>$ {totalPrice}</td>            
            <td>
                {
                  paid ?<button className='btn btn-sm btn-success'>Paid</button> : <button className='btn btn-sm btn-warning'>Unpaid</button> 
                }
            </td>            
            <td> <button onClick={()=> makePayment(_id)} disabled={paid} className='btn btn-sm btn-success'>Pay</button> </td>            
            <td> <label onClick={()=> setDeleteOrder(order)} disabled={paid} for="delete-order" className="btn btn-sm btn-error">Delete</label></td>                        
        </tr>
    );
};

export default Order;