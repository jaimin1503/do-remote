import NavLogged from "../components/NavLogged";
import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <NavLogged />
      <div className="container border rounded-2xl my-5 p-5 h-screen">
        <div className="user-info flex items-center">
          <img
            className=" h-24 w-24 rounded-full object-cover"
            src={user?.profile?.profilePicture}
            alt="image"
          />
          <div className="info mx-3">
            <h1 className="text-4xl my-2 font-semibold">{user.username}</h1>
            <h1 className="text-lg my-2 font-semibold">{user.location}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
