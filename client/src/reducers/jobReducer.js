import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  savedJobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setSavedJobs: (state, action) => {
      state.savedJobs = action.payload;
    },
  },
});

export const { setJobs, setSavedJobs } = jobSlice.actions;
export default jobSlice.reducer;
