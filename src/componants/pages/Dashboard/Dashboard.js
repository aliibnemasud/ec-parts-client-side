import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {

    // Load user from mongo db
    const { isLoading, error, data: users } = useQuery('users', () =>
        fetch('https://floating-dusk-82041.herokuapp.com/users')
            .then(rs => rs.json())
    )
    const [admin, setAdmin] = useState(false);    

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side  bg-red-500">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li> <Link to="myprofile">My Profile</Link> </li>

                        <li> <Link to="myreview">My Review</Link> </li>
                        <li> <Link to="/dashboard">My Orders</Link> </li>
                        {
                            
                            <>
                                <li> <Link to="manageuser">Manage User</Link> </li>
                                <li> <Link to="manageallorders">Manage All Order</Link> </li>
                                <li> <Link to="addAProduct">Add A Product</Link> </li>
                                <li> <Link to="manageProduct">Manage Product</Link> </li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;