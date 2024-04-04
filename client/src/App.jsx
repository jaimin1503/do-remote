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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignCreation />} />
        <Route path="/dev" element={<DevIT />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/db" element={<DB />} />
        <Route path="/client" element={<ClientDB />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
