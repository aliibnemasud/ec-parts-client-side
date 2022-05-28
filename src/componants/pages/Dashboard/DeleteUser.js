import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({deleteUser}) => {

    const [user, setUser] = useState('');    
    useEffect(() =>{
        fetch(`https://floating-dusk-82041.herokuapp.com/users/${deleteUser}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    
    
    const handleDelete = id =>{
        const url = `https://floating-dusk-82041.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            toast.success(`The user ${user.email} has been deleted.`)
            console.log(data)
        })
    }

    return (
        <div>            
            <input type="checkbox" id="delete-user" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                <label for="delete-user" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-3xl'>Are you sure want to delete this User?</h1>
                    <h3 className="font-bold text-lg">Email: {user.email}</h3>
                    <p className="py-4">Role: {user?.role}</p>                    
                    <div className="modal-action">
                    <label for="delete-user" onClick={() => handleDelete(deleteUser)} className="btn">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;