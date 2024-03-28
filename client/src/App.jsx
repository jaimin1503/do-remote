import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DesignCreation from "./pages/DesignCreation";
import DevIT from "./pages/DevIT";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignCreation />} />
        <Route path="/dev" element={<DevIT />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
