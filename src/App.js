import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componants/pages/Home/Home';
import Login from './componants/pages/Login/Login';
import SignUp from './componants/pages/Login/SignUp';
import Navbar from './componants/pages/Shared/Navbar/Navbar';
import Footer from './componants/pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
