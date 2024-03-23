import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile", 
  initialState: { userInfo: {} },
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUserInfo } = profileSlice.actions;
export default profileSlice.reducer; // so we can import it in store file
