import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componants/pages/Home/Home';
import Login from './componants/pages/Login/Login';
import SignUp from './componants/pages/Login/SignUp';
import Navbar from './componants/pages/Shared/Navbar/Navbar';
import Footer from './componants/pages/Shared/Footer/Footer';
import Blog from './componants/pages/Blog/Blog';
import Tooldetails from './componants/pages/Home/Tooldetails';
import Dashboard from './componants/pages/Dashboard/Dashboard';
import MyOrder from './componants/pages/Dashboard/MyOrder';
import MyReview from './componants/pages/Dashboard/MyReview';
import Myprofile from './componants/pages/Dashboard/Myprofile';
import RequireAuth from './componants/pages/Shared/RequireAuth/RequireAuth';
import Error from './componants/pages/404/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageUser from './componants/pages/Dashboard/ManageUser';
import ManageAllOrders from './componants/pages/Dashboard/ManageAllOrders';
import AddAProduct from './componants/pages/Dashboard/AddAProduct';
import Manageproduct from './componants/pages/Dashboard/Manageproduct';
import Payment from './componants/pages/Payment/Payment';
import MyPortfolio from './componants/pages/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/order/payment/:orderid' element={<Payment></Payment>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>} ></Route>
          <Route path='myreview' element={<MyReview></MyReview>} ></Route>
          <Route path='myprofile' element={ <Myprofile></Myprofile>} ></Route>
          <Route path='manageuser' element={ <ManageUser></ManageUser>} ></Route>
          <Route path='manageallorders' element={ <ManageAllOrders></ManageAllOrders> } ></Route>
          <Route path='addAProduct' element={<AddAProduct></AddAProduct>} ></Route>
          <Route path='manageProduct' element={<Manageproduct></Manageproduct>} ></Route>
        </Route>

        <Route path='/tools/:toolsid' element={<RequireAuth><Tooldetails></Tooldetails></RequireAuth>}></Route>

        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <ToastContainer />

      

      <Footer></Footer>
    </div>
  );
}

export default App;
