import { setJobs } from "../reducers/jobReducer";
import axios from "axios";

export function saveJob(id) {
  return axios.put(`${import.meta.env.VITE_BASE_URL}/job/savejob/${id}`, null, {
    withCredentials: true,
  });
}

export function editJob(id, formData) {
  return async (dispatch) => {
    try {
      await axios
        .put(`${import.meta.env.VITE_BASE_URL}/job/editjob/${id}`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          dispatch(
            (setJobs[setJobs.findIndex((job) => job._id === id)] =
              res.data.result)
          );
        })
        .catch((error) => {
          console.log("error accure in update display", error);
        });
    } catch (error) {
      console.error("UPDATE_INFO_API API ERROR............", error);
    }
  };
}
