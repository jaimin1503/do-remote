import { useEffect, useState } from "react";
import Navebar from "../components/Navebar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setuser } from "../reducers/userReducer";

export default function Home() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/getUser`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        dispatch(setuser(res.data.user));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <Navebar role={user?.role} />
    </div>
  );
}
