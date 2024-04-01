import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  profile: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setuser, setProfile } = userSlice.actions;
export default userSlice.reducer;
