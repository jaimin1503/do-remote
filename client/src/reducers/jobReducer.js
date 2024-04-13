import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  savedJobs: [],
  job: {},
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
    setJob: (state, action) => {
      state.job = action.payload;
    },
  },
});

export const { setJobs, setSavedJobs, setJob } = jobSlice.actions;
export default jobSlice.reducer;
