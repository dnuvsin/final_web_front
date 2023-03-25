import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInSide from "./page/SignInSide";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import Homepage from "./page/Homepage";
import PhotoGallery from "./page/AllTour";
import SignUp from "./page/SignUp";
import AllUsers from "./page/AllUsers";
import PhotoDetail from "./component/PhotoDetail";
import ContactUs2 from "./page/ContactUs2";
import AdminTour from "./page/AdminTour";
import Pro1 from "./program/Pro1.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar />
        <hr />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ทัวร์ทั้งหมด" element={<PhotoGallery />} />
          <Route path="/ติดต่อเรา" element={<ContactUs2 />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/program" element={<Pro1 />} />
          <Route path="/ทัวร์ทั้งหมด/:id" element={<PhotoDetail />} />
          <Route path="/admin/tour" element={<AdminTour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
