import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  adminId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.adminId = action.payload.adminId;
    },
    clearAuth(state, action) {
      state.isAuth = false;
      state.adminId = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
