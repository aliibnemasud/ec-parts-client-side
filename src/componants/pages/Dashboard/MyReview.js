import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {    

    const ratingRef = useRef('');
    const descRef = useRef('');
    const [user, loading, error] = useAuthState(auth);
    
    if(loading){
        return loading;
    }

    const addReview = e =>{
        e.preventDefault()
        const desc = descRef.current.value;
        const rating = ratingRef.current.value;

        const review = {
            name: user.displayName,
            desc: desc,
            rating: rating,
            img: user.photoURL
        }

        fetch('https://floating-dusk-82041.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Add Review Success')
            console.log(data)
        })
    }


    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>My review</h1>

            <form onSubmit={addReview} className="text-center mt-20">                           
                
                <textarea type="text" ref={descRef} placeholder="Type your Review" className="mb-3 textarea textarea-bordered w-full max-w-xs" /> <br />
                <input type="number" ref={ratingRef} placeholder="Stock" className="mb-3 input input-bordered w-full max-w-xs" required /> <br />
                <input type="submit" value="Add Review" className="btn btn-primary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default MyReview;