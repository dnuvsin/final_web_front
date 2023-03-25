import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInSide from "./page/SignInSide";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import Homepage from "./page/Homepage";
import PhotoGallery from "./page/AllTour";
import SignUp from "./page/SignUp";
import AllUsers from "./page/AllUsers";
import PhotoDetail from "./component/PhotoDetail";
import Pro4 from "./mockuptour/pro4";
import ContactUs2 from "./page/ContactUs2";
import AdminTour from "./page/AdminTour";

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
          <Route exact path="/ทัวร์ทั้งหมด" element={<PhotoGallery />} />
          <Route path="/ติดต่อเรา" element={<ContactUs2 />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/program" element={<Pro4 />} />
          <Route path="/ทัวร์ทั้งหมด/:id" component={<PhotoDetail/>} />
          <Route path="/admin/tour" component={<AdminTour/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
