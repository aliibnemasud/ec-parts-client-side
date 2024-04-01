import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componants/pages/Home/Home";
import Login from "./componants/pages/Login/Login";
import SignUp from "./componants/pages/Login/SignUp";
import Navbar from "./componants/pages/Shared/Navbar/Navbar";
import Footer from "./componants/pages/Shared/Footer/Footer";
import Blog from "./componants/pages/Blog/Blog";
import Tooldetails from "./componants/pages/Home/Tooldetails";
import Dashboard from "./componants/pages/Dashboard/Dashboard";
import MyOrder from "./componants/pages/Dashboard/MyOrder";
import MyReview from "./componants/pages/Dashboard/MyReview";
import Myprofile from "./componants/pages/Dashboard/Myprofile";
import RequireAuth from "./componants/pages/Shared/RequireAuth/RequireAuth";
import Error from "./componants/pages/404/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageUser from "./componants/pages/Dashboard/ManageUser";
import ManageAllOrders from "./componants/pages/Dashboard/ManageAllOrders";
import AddAProduct from "./componants/pages/Dashboard/AddAProduct";
import Manageproduct from "./componants/pages/Dashboard/Manageproduct";
import Payment from "./componants/pages/Payment/Payment";
import MyPortfolio from "./componants/pages/MyPortfolio/MyPortfolio";
import Shop from "./componants/pages/Shop/Shop";
import BlogDetails from "./componants/pages/Home/BlogDetails";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />

				{/* optional */}
				{/* <Route path='/dashboard/login' element={<Login></Login>}></Route> */}

				<Route path="/signup" element={<SignUp />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blogs/:blogsid" element={<BlogDetails />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/myportfolio" element={<MyPortfolio />} />

				<Route path="/order/payment/:orderid" element={<Payment />} />
				<Route
					path="dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route index element={<MyOrder />} />
					<Route path="myreview" element={<MyReview />} />
					<Route path="myprofile" element={<Myprofile />} />
					<Route path="manageuser" element={<ManageUser />} />
					<Route path="manageallorders" element={<ManageAllOrders />} />
					<Route path="addAProduct" element={<AddAProduct />} />
					<Route path="manageProduct" element={<Manageproduct />} />
				</Route>
				<Route
					path="/tools/:toolsid"
					element={
						<RequireAuth>
							<Tooldetails />
						</RequireAuth>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default App;
