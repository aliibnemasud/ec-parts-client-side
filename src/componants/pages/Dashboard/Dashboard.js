import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <h1>Dashboard</h1>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side  bg-red-500">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li> <Link to="myorders">My Orders</Link> </li>
                        <li> <Link to="myreview">My Review</Link> </li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;