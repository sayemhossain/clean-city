import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import AccountSettings from "./pages/Dashboard/AccountSettings/AccountSettings";
import AllAdmin from "./pages/Dashboard/AllAdmin/AllAdmin";
import AllProduct from "./pages/Dashboard/AllProduct/AllProduct";
import AllUser from "./pages/Dashboard/AllUser/AllUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageContact from "./pages/Dashboard/ManageContact/ManageContact";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import OrderHistory from "./pages/Dashboard/OrderHistory/OrderHistory";
import OrderManagement from "./pages/Dashboard/OrderManagement/OrderManagement";
import PackageManagement from "./pages/Dashboard/PackageManagement/PackageManagement";
import Bkash from "./pages/Dashboard/Payment/Bkash";
import Nagad from "./pages/Dashboard/Payment/Nagad";
import Payment from "./pages/Dashboard/Payment/Payment";
import PaymentStatus from "./pages/Dashboard/Payment/PaymentStatus";
import Rocket from "./pages/Dashboard/Payment/Rocket";
import PaymentManagement from "./pages/Dashboard/PaymentManagement/PaymentManagement";
import ProductsManagement from "./pages/Dashboard/ProductsManagement/ProductsManagement";
import SellProducts from "./pages/Dashboard/SellProducts/SellProducts";
import Basic from "./pages/Dashboard/SubcriptionPackage/Basic";
import Premium from "./pages/Dashboard/SubcriptionPackage/Premium";
import Standard from "./pages/Dashboard/SubcriptionPackage/Standard";
import SubcriptionPackage from "./pages/Dashboard/SubcriptionPackage/SubcriptionPackage";
import Home from "./pages/Home/Home/Home";
import LetesNewsDetails from "./pages/Home/LatestNews/LetesNewsDetails";
import OurHistory from "./pages/Home/WhyUs/OurHistory";
import OurMission from "./pages/Home/WhyUs/OurMission";
import OurVision from "./pages/Home/WhyUs/OurVision";
import ManageUserProducts from "./pages/Products/ManageUserProducts";
import Products from "./pages/Products/Products";
import ProductsDetails from "./pages/Products/ProductsDetails";
import Footer from "./shared/Footer/Footer";
import Login from "./shared/Login/Login";
import Navbar from "./shared/Navbar/Navbar";
import RequireAuth from "./shared/RequireAuth/RequireAuth";
import Signup from "./shared/Signup/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleCart = (product) => {
    setCartItems([...cartItems, product]);
    localStorage.setItem("cartItem", JSON.stringify([...cartItems, product]));
    toast("Added to successfully !");
  };
  return (
    <div>
      <Navbar cartItems={cartItems}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<OurMission></OurMission>}></Route>
          <Route path="/ourmission" element={<OurMission></OurMission>}></Route>
          <Route path="/ourvision" element={<OurVision></OurVision>}></Route>
          <Route path="/ourhistory" element={<OurHistory></OurHistory>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/blogs/:blogId"
          element={<LetesNewsDetails></LetesNewsDetails>}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="your-products"
            element={<ManageUserProducts></ManageUserProducts>}
          ></Route>
          <Route
            path="sellproduct"
            element={<SellProducts></SellProducts>}
          ></Route>
          <Route
            path="order-history"
            element={<OrderHistory></OrderHistory>}
          ></Route>
          <Route
            path="subcriptionpackage"
            element={<SubcriptionPackage></SubcriptionPackage>}
          ></Route>
          <Route path="basic" element={<Basic></Basic>}></Route>
          <Route path="standard" element={<Standard></Standard>}></Route>
          <Route path="premium" element={<Premium></Premium>}></Route>

          <Route
            path="paymentstatus"
            element={<PaymentStatus></PaymentStatus>}
          ></Route>

          <Route path="payment/:id" element={<Payment></Payment>}>
            <Route index element={<Bkash></Bkash>}></Route>
            <Route path="bkash" element={<Bkash></Bkash>}></Route>
            <Route path="nagad" element={<Nagad></Nagad>}></Route>
            <Route path="rocket" element={<Rocket></Rocket>}></Route>
          </Route>

          <Route path="allproduct" element={<AllProduct></AllProduct>}></Route>

          <Route
            path="accountsettings"
            element={<AccountSettings></AccountSettings>}
          ></Route>
          <Route
            path="managecontact"
            element={<ManageContact></ManageContact>}
          ></Route>
          <Route
            path="paymentmanagement"
            element={<PaymentManagement></PaymentManagement>}
          ></Route>
          <Route
            path="order-management"
            element={<OrderManagement></OrderManagement>}
          ></Route>
          <Route
            path="manage-products"
            element={<ProductsManagement></ProductsManagement>}
          ></Route>
          <Route
            path="managepackage"
            element={<PackageManagement></PackageManagement>}
          ></Route>
          <Route path="alluser" element={<AllUser></AllUser>}></Route>
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="alladmin" element={<AllAdmin></AllAdmin>}></Route>
        </Route>
        <Route
          path="/products"
          element={<Products handleCart={handleCart} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout cartItems={cartItems}></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products/:productsId"
          element={<ProductsDetails></ProductsDetails>}
        ></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
