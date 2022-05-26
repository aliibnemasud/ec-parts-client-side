import React from 'react';

const Order = ({order}) => {
    const { name, price, toatlPrice, quantity} = order;
    return (
        <tr>
            <th>1</th>
            <td> {name} </td>
            <td>{price}</td>
            <td>{quantity}</td>            
            <td>{toatlPrice}</td>            
            <td> <button className='btn btn-sm btn-warning'>Unpaid</button> </td>            
            <td> <button className='btn btn-sm btn-success'>Pay</button> </td>            
            <td> <button className='btn btn-sm btn-error'>Delete</button> </td>            
        </tr>
    );
};

export default Order;