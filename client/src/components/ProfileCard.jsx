import settingsLogo from "./assets/settings.svg";
import logoutLogo from "./assets/logout.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ id, photo, username, role }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <div className="card w-60 flex py-4 shadow-md">
        <div className="image text-center">
          <img
            className="h-28 w-28 rounded-full mx-auto object-cover"
            src={photo}
            alt="img"
          />
          {/* //TODO: recheck this */}
          <Link to={`/profile/${id}`}>
            <p
              className="Name hover:underline hover:text-blue-600 cursor-pointer"
              style={{ transition: "0.3s" }}
            >
              {username}
            </p>
          </Link>
          <p className="role text-sm text-gray-600">{role}</p>
        </div>
        <div className="options">
          <div className="settings flex mt-4 cursor-pointer">
            <img className=" pl-5 pr-3" src={settingsLogo} alt="settings" />
            <p className=" text-base font-medium">Settings</p>
          </div>
          <div
            onClick={handleLogout}
            className="logout flex mt-4 cursor-pointer"
          >
            <img className=" pl-5 pr-3" src={logoutLogo} alt="" />
            <p className=" text-base font-medium">Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileCard;
