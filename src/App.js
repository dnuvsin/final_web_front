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
import AdminContact from "./page/AllContact";
import AdminPage from "./page/Admin";
import Page5 from "./font/componants/page5";
import Page6 from "./font/componants/page6";
import Page7 from "./font/componants/page7";

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
          <Route path="/ทัวร์ทั้งหมด/1" element={<Page5 />} />
          <Route path="/ทัวร์ทั้งหมด/2" element={<Page6 />} />
          <Route path="/ทัวร์ทั้งหมด/3" element={<Page7 />} />
          <Route path="/ติดต่อเรา" element={<ContactUs2 />} />
          <Route path="/program" element={<Pro1 />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/allreserve" element={<AllUsers />} />
          <Route path="/admin/allusers" element={<AllUsers />} />
          <Route path="/admin/tour" element={<AdminTour />} />
          <Route path="/admin/contact" element={<AdminContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
