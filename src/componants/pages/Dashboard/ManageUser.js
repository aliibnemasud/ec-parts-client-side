import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteUser from './DeleteUser';
import User from './User';

const ManageUser = () => {

    const [deleteUser, setDeleteUser] = useState(null)

    const { isLoading, error, data: users } = useQuery(['users'], ()=>
    fetch('https://ec-cycle-parts.onrender.com/users')
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
                                setDeleteUser={setDeleteUser}                                
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteUser && <DeleteUser deleteUser={deleteUser}> </DeleteUser>}
        </div>
    );
};

export default ManageUser;