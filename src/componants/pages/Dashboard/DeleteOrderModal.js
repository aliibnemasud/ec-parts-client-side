import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deleteOrder}) => {
    const {_id, name, toatlPrice, quantity} = deleteOrder; 

    const handleDelete = id =>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            toast.success(`${name} has been deleted.`)
            console.log(data)
        })
    }

    return (
        <div>            
            <input type="checkbox" id="delete-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box text-center">
                <label for="delete-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-3xl'>Are you sure want to delete this?</h1>
                    <h3 class="font-bold text-lg">Name: {name}</h3>
                    <p class="py-4">Totla Price: {toatlPrice}</p>
                    <p class="py-4"> Quantity: {quantity}</p>
                    <div class="modal-action">
                    <label for="delete-order" onClick={() => handleDelete(_id)} class="btn">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;