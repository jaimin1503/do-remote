import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DesignCreation from "./pages/DesignCreation";
import DevIT from "./pages/DevIT";
import Login from "./forms/Login";
import Signup from "./forms/Signup";
import Welcome from "./forms/Welcome";
import VerifyEmail from "./forms/VerifyEmail";
import DB from "./pages/DB";
import Profile from "./pages/Profile";
import ClientDB from "./pages/ClientDB";
import ViewProfile from "./pages/ViewProfile";
import SearchJob from "./pages/SearchJob";
import Apply from "./pages/Apply";
import EditJob from "./pages/client/EditJob";
import Proposals from "./pages/client/Proposals";
import MyJobs from "./pages/client/MyJobs";
import { Toaster } from "react-hot-toast";
import PostJob from "./pages/client/PostJob";
import AIDS from "./pages/AIDS";
import SavedProfiles from "./pages/client/SavedProfiles";
import Messages from "./pages/Messages";
import ViewProposal from "./components/proposal/ViewProposal";
import EditProposal from "./components/proposal/EditProposal";
import Contracts from "./pages/freelancer/Contracts";
import FreelancerDB from "./pages/FreelancerDB";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/design" element={<DesignCreation />} />
        <Route path="/dev" element={<DevIT />} />
        <Route path="/aids" element={<AIDS />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        {/* <Route path="/db" element={<DB />} /> */}
        <Route path="/freelancerdb" element={<FreelancerDB />} />
        <Route path="/clientdb" element={<ClientDB />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/viewprofile/:id" element={<ViewProfile />} />
        <Route path="/viewproposal/:id" element={<ViewProposal />} />
        <Route path="/search/job" element={<SearchJob />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/editJob/:id" element={<EditJob />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/editproposal/:id" element={<EditProposal />} />
        <Route path="/savedprofiles" element={<SavedProfiles />} />
        <Route path="/myjobs" element={<MyJobs />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contracts" element={<Contracts />} />
      </Routes>
    </>
  );
}

export default App;
