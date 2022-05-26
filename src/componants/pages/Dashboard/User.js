import React from 'react';

const User = ({user, index}) => {
    const {email} = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>Name</td>            
            <td>{email}</td>
            <td> <button className='btn btn-sm btn-warning'>Role</button> </td>
            <td> <button className='btn btn-sm btn-success'>Make Admin</button> </td>
            <td> <label for="delete-order" class="btn btn-sm btn-error">Delete</label></td>
        </tr>
    );
};

export default User;