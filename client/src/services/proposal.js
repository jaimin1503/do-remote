import { setProposal } from "../reducers/proposalReducer";
import axios from "axios";

export function editProposal(id, formData) {
  return async (dispatch) => {
    try {
      await axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/proposal/editproposal/${id}`,
          formData,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data.updatedProposal);
          dispatch(setProposal(res.data.updatedProposal));
        })
        .catch((error) => {
          console.log("error accure in update display", error);
        });
    } catch (error) {
      console.error("UPDATE_INFO_API API ERROR............", error);
    }
  };
}
