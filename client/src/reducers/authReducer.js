import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupdata: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setsignupdata: (state, action) => {
      state.signupdata = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setsignupdata, setLoading } = authSlice.actions;
export default authSlice.reducer;
