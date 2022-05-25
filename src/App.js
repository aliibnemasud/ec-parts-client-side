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
import RequireAuth from './componants/pages/Shared/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>} ></Route>
          <Route path='myreview' element={<MyReview></MyReview>} ></Route>
        </Route>

        <Route path='/tools/:toolsid' element={<RequireAuth><Tooldetails></Tooldetails></RequireAuth>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
