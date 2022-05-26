import React from 'react';

const Order = ({order, setDeleteOrder, index}) => {
    const { name, price, toatlPrice, quantity} = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td> {name} </td>
            <td>$ {price}</td>
            <td>{quantity}</td>            
            <td>$ {toatlPrice}</td>            
            <td> <button className='btn btn-sm btn-warning'>Unpaid</button> </td>            
            <td> <button className='btn btn-sm btn-success'>Pay</button> </td>            
            <td> <label onClick={()=> setDeleteOrder(order)} for="delete-order" className="btn btn-sm btn-error">Delete</label></td>                        
        </tr>
    );
};

export default Order;