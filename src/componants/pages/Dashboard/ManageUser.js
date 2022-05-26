import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import User from './User';

const ManageUser = () => {

    const { isLoading, error, data: users } = useQuery('users', ()=>
    fetch('https://floating-dusk-82041.herokuapp.com/users')
    .then(rs => rs.json())    
    )

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl uppercase my-4 font-bold'>Manage User</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>                            
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User
                                user={user}
                                index={index}                                
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder}></DeleteOrderModal>} */}
        </div>
    );
};

export default ManageUser;