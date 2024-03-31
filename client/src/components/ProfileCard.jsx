import settingsLogo from "./assets/settings.svg";
import logoutLogo from "./assets/logout.svg";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { user } = useSelector((state) => state.user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <div className="card w-60 flex py-4 shadow-md">
        <div className="image text-center">
          <img
            className=" h-28 w-28 rounded-full mx-auto"
            src={user.profile?.prfilePicture}
            alt={user.profile?.prfilePicture}
          />

          <p className="Name">{user?.username}</p>
          <p className="role text-sm text-gray-600">Freelancer</p>
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
