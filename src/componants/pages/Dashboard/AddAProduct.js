import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const nameRef = useRef('');
    const priceRef = useRef('');
    const toolsDescRef = useRef('');
    const stockRef = useRef('');
    const imageRef = useRef('');

    const handleAddPoduct = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const stock = stockRef.current.value;
        const toolsDesc = toolsDescRef.current.value;
        const image = imageRef.current.value;
        console.log(name, price, stock, toolsDesc, image);

        const tool = {
            name: name,
            price: price,
            stock: stock,
            desc: toolsDesc,
            img: image
        }
        fetch('https://floating-dusk-82041.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(tool)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success(`${name} has been added`)
        })
    }
    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>Add New Product</h1>

            <form onSubmit={handleAddPoduct} className="text-center mt-20">
                <input type="text" ref={nameRef} placeholder="Product Name" className="mb-3 input input-bordered w-full max-w-xs" required/> <br />
                <input type="number" ref={priceRef} placeholder="Price" className="mb-3 input input-bordered w-full max-w-xs" required/> <br />
                <input type="number" ref={stockRef} placeholder="Stock" className="mb-3 input input-bordered w-full max-w-xs" required/> <br />                
                <textarea type="text" ref={toolsDescRef} placeholder="Product description" className="mb-3 textarea textarea-bordered w-full max-w-xs" /> <br />
                <input type="text" ref={imageRef} placeholder="Product image link" className="mb-3 input input-bordered w-full max-w-xs" required/> <br />
                <input type="submit" value="Add Product" placeholder="Product image link" className="btn btn-primary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default AddAProduct;