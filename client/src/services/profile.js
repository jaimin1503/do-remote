import { toast } from "react-hot-toast";
import { setuser } from "../reducers/userReducer";
import axios from "axios";
import { useDispatch } from "react-redux";

export function updateDisplayPicture(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editProfilePicture/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Display Picture Updated Successfully");
          dispatch(setuser(res?.data?.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Display Picture");
        });

      console.log("UPDATE_DISPLAY_PICTURE_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_DISPLAY_PICTURE_API API ERROR............", error);
      toast.error("Could Not Update Display Picture");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

export function updateInfo(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editInfo/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Profile Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Profile");
        });

      console.log("UPDATE_INFO_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_INFO_API API ERROR............", error);
      toast.error("Could Not Update Profile");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

export function updateSkills(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editSkills/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Skills Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Skills");
        });

      console.log("UPDATE_SKILLS_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_SKILLS_API API ERROR............", error);
      toast.error("Could Not Update Skills");
    } finally {
      toast.dismiss(toastId);
    }
  };
}
