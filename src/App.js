import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInSide from "./page/SignInSide";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import Homepage from "./page/Homepage";
import Qoutes from "./Qoutes";
import PhotoGallery from "./page/AllTour";
import SignUp from "./page/SignUp";
import ContactUs from "./page/ContactUs";
import LoginPage from "./page/LoginPage";
import ShowUsers from "./page/ShowUsers";
import DataTable from "./page/AllReserve";
import AllUsers from "./page/AllUsers";

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
          <Route path="/ติดต่อเรา" element={<ContactUs />} />
          <Route path="/allusers" element={<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
