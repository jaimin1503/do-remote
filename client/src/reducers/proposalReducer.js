import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proposal: null,
};

const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  reducers: {
    setProposal: (state, action) => {
      state.proposal = action.payload;
    },
  },
});

export const { setProposal } = proposalSlice.actions;
export default proposalSlice.reducer;
