import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import OurHistory from "./pages/Home/WhyUs/OurHistory";
import OurMission from "./pages/Home/WhyUs/OurMission";
import OurVision from "./pages/Home/WhyUs/OurVision";
import Navbar from "./shared/Navbar/Navbar";

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
      </Routes>
    </div>
  );
}

export default App;
