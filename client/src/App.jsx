import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DesignCreation from "./pages/DesignCreation";
import DevIT from "./pages/DevIT";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import VerifyEmail from "./pages/VerifyEmail";
import DB from "./pages/DB";
import Profile from "./pages/Profile";
import ClientDB from "./pages/ClientDB";
import ViewProfile from "./pages/ViewProfile";
import SearchJob from "./pages/SearchJob";
import Apply from "./pages/Apply";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/design" element={<DesignCreation />} />
        <Route path="/dev" element={<DevIT />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/db" element={<DB />} />
        <Route path="/client" element={<ClientDB />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/viewprofile/:id" element={<ViewProfile />} />
        <Route path="/search/job" element={<SearchJob />} />
        <Route path="/apply/:id" element={<Apply />} />
      </Routes>
    </>
  );
}

export default App;
