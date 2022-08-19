import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import LetesNewsDetails from "./pages/Home/LatestNews/LetesNewsDetails";
import OurHistory from "./pages/Home/WhyUs/OurHistory";
import OurMission from "./pages/Home/WhyUs/OurMission";
import OurVision from "./pages/Home/WhyUs/OurVision";
import Footer from "./shared/Footer/Footer";
import Login from "./shared/Login/Login";
import Navbar from "./shared/Navbar/Navbar";
import Signup from "./shared/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
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
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
