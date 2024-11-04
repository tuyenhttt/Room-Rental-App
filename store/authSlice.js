import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userData: null,
    token: null,
  },
  reducers: {
    authenticate(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
      state.token = null;
    },
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
