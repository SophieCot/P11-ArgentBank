import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    loading: false,
    error: "",
    updateLoading: false,
    updateError: "",
  },
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    },
    userLoginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    userUpdateRequest: (state) => {
      state.updateLoading = true;
      state.updateError = "";
    },
    userUpdateSuccess: (state, action) => {
        state.updateLoading = false;
    },
    userUpdateFailed: (state, action) => {
      state.updateLoading = false;
      state.updateError = action.payload.message;
    },
    userLogout: (state) => {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailed,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFailed,
  userLogout,
} = userSlice.actions;

export default userSlice.reducer;
