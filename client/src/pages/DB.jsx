import NavLogged from "../components/NavLogged";
import { useSelector } from "react-redux";
import ClientDB from "./ClientDB";
import FreelancerDB from "./FreelancerDB";

const DB = () => {
  const { user } = useSelector((state) => state.user);
  return localStorage.getItem("token") ? (
    <div className=" relative">
      {/* <NavLogged /> */}
      {user?.role === "freelancer" ? <FreelancerDB /> : <ClientDB />}
    </div>
  ) : (
    (window.location.href = "/")
  );
};
export default DB;
