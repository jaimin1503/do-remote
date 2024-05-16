import NavLogged from "../../components/NavLogged";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";
import UserSktn from "../../skeletons/UserSktn";

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

  if (SavedProfiles.length === 0) {
    return (
      <>
        <NavLogged />
        <div className="container h-screen w-screen flex justify-center items-center">
          <h1 className=" text-4xl font-medium">No saved profiles</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <NavLogged />
      <div className="m-4 my-10 ">
        <h1
          style={{ fontFamily: "Philosopher-Bold" }}
          className=" text-3xl my-4 font-medium"
        >
          Your Saved Profiles
        </h1>
      </div>
      {profiles.length === 0 ? (
        <>
          <UserSktn />
          <UserSktn />
          <UserSktn />
        </>
      ) : (
        profiles.map((profile, index) => (
          <div className=" p-4 border-b md:m-8" key={profile?._id}>
            <UserCard user={profile} />
          </div>
        ))
      )}
    </>
  );
};
export default SavedProfiles;
