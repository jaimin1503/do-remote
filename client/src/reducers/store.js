import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "../reducers/authReducer.js";
import jobReducer from "./jobReducer.js";
import proposalReducer from "./proposalReducer.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    job: jobReducer,
    proposal: proposalReducer,
  },
});
