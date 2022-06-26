import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({deleteTools}) => {

    const {_id, name } = deleteTools; 

    const handleDelete = id =>{
        const url = `http://localhost:5000/tool/${id}`;
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
                     
            <input type="checkbox" id="delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                <label for="delete-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-3xl'>Are you sure want to delete this Product?</h1>
                    <h3 className="font-bold text-lg">Name: {name}</h3>
                    <p className="py-4">Totla Price: {}</p>
                    <p className="py-4"> Quantity: {}</p>
                    <div className="modal-action">
                    <label for="delete-order" onClick={() => handleDelete(_id)} className="btn">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;