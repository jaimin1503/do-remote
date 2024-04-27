import CloseIcon from "@mui/icons-material/Close";
import proposalLogo from "./assets/proposal.svg";
import save from "./assets/save.svg";
import find from "./assets/find.svg";
import profile from "./assets/profile.svg";
import job from "./assets/job.svg";
import message from "./assets/message.svg";

const ResponsiveNav = ({ toggleDrawer, id, role }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (role === "client") {
    return (
      <>
        <div className=" p-4 w-full flex justify-end">
          <CloseIcon onClick={toggleDrawer(false)} className="cursor-pointer" />
        </div>
        <div className=" w-screen sm:w-[340px]">
          <ul>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={profile} alt="" />
              </span>
              <a href={`/profile/${id}`}>My Profile</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={find} alt="" />
              </span>
              <a href="/db">Find Talent</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={save} alt="" />
              </span>
              <a href="/savedprofiles">Saved Profiles</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={proposalLogo} alt="" />
              </span>
              <a href="/proposals">Proposals</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={job} alt="" />
              </span>
              <a href="/myjobs">My Jobs</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={message} alt="" />
              </span>
              <a href="/messages">Messages</a>
            </li>
            <li className=" p-4 border-b">
              <button
                onClick={handleLogout}
                className=" text-white py-2 px-5 rounded-full bg-red-500 hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" p-4 w-full flex justify-end">
          <CloseIcon onClick={toggleDrawer(false)} className="cursor-pointer" />
        </div>
        <div className=" w-screen sm:w-[340px]">
          <ul>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={profile} alt="" />
              </span>
              <a href={`/profile/${id}`}>My Profile</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={find} alt="" />
              </span>
              <a href="/db">Find Work</a>
            </li>

            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={proposalLogo} alt="" />
              </span>
              <a href="/proposals">My Proposals</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={job} alt="" />
              </span>
              <a href="/contracts">All contracts</a>
            </li>
            <li className=" p-4 border-b flex">
              <span className=" pr-2">
                <img src={message} alt="" />
              </span>
              <a href="/messages">Messages</a>
            </li>
            <li className=" p-4 border-b">
              <button
                onClick={handleLogout}
                className=" text-white py-2 px-5 rounded-full bg-red-500 hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }
};
export default ResponsiveNav;
