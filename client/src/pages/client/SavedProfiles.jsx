import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";

const SavedProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/client/getSavedProfiles`, {
        withCredentials: true,
      })
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavLogged />
      <div className="m-4 my-10 ">
        <h1 className=" text-3xl my-4 font-medium">Your Saved Profiles</h1>
      </div>
      {profiles &&
        profiles.map((profile) => (
          <div key={profile?._id} className=" p-4 border-b">
            <UserCard user={profile} />
          </div>
        ))}
    </>
  );
};
export default SavedProfiles;
