import { useEffect } from "react";
import Navebar from "../components/Navebar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setuser } from "../reducers/userReducer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/getUser`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setuser(res.data.user));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <Navebar />
    </div>
  );
}
