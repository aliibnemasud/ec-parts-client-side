import React from "react";

const User = ({ user, index, setDeleteUser}) => {
    const {_id, email, role } = user;

    const makeAdmin = () => {
        fetch(`https://ec-cycle-parts.onrender.com/user/admin/${email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>Name</td>
            <td>{email}</td>
            <td> <button className='btn btn-sm btn-warning'>Role</button> </td>
            <td> <button className='btn btn-sm btn-success' disabled={role == 'admin'} onClick={makeAdmin}>{role ? 'Admin': 'Make Admin'}</button> </td>
            
            <td> <label onClick={()=> setDeleteUser(_id)} for="delete-user" className="btn btn-sm btn-error">Delete</label></td>
        </tr>
    );
};

export default User;