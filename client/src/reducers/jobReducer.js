import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  savedJobs: [],
  job: {},
  allJobs: [],
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
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
  },
});

export const { setJobs, setSavedJobs, setJob, setAllJobs } = jobSlice.actions;
export default jobSlice.reducer;
