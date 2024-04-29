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

export function updateSpecs(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editSpecs/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Specializations Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Specializations");
        });

      console.log("UPDATE_SPECS_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_SPECS_API API ERROR............", error);
      toast.error("Could Not Update Specializations");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

export function updateRate(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editRate/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Rate Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Rate");
        });

      console.log("UPDATE_RATE_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_RATE_API API ERROR............", error);
      toast.error("Could Not Update Rate");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

export function updateLanguages(languages, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editLanguages/${pId}`,
          languages,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Languages Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Languages");
        });

      console.log("UPDATE_LANGUAGES_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_LANGUAGES_API API ERROR............", error);
      toast.error("Could Not Update Languages");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

export function updateEducation(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editEducation/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Education Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Education");
        });

      console.log("UPDATE_EDUCATION_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_EDUCATION_API API ERROR............", error);
      toast.error("Could Not Update Education");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

export function updateLinks(formData, pId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/profile/editLinks/${pId}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Education Updated Successfully");
          dispatch(setuser(res.data.data));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
          toast.error("Could Not Update Education");
        });

      console.log("UPDATE_EDUCATION_API API RESPONSE............");
    } catch (error) {
      console.error("UPDATE_EDUCATION_API API ERROR............", error);
      toast.error("Could Not Update Education");
    } finally {
      toast.dismiss(toastId);
    }
  };
}
