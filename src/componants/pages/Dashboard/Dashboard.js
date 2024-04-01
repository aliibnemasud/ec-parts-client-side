import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../pages/Shared/Loading/Loading'

const Dashboard = () => {

    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);

    if (loading) {
        return <Loading />
    }    

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet/>

                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side  bg-red-500">
                    <label for="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li> <Link to="myprofile">My Profile</Link> </li>
                        {
                            !admin && <>
                                <li> <Link to="myreview">My Review</Link> </li>
                                <li> <Link to="/dashboard">My Orders</Link> </li>
                            </>
                        }

                        {admin &&
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