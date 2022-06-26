import React from 'react';

const AllProducts = ({tool, index, setDeleteTools}) => {
    const {name, price, stock} = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td> {name} </td>
            <td>$ {price}</td>
            <td>{stock}</td>            
            <td> <label className="btn btn-sm btn-primary">Manage</label></td>
            <td> <label for="delete-order" onClick={()=> setDeleteTools(tool)} className="btn btn-sm btn-error">Delete</label></td>
        </tr>
    );
};

export default AllProducts;