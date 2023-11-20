import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ROOT_URL } from "../../../constants";
const initialState = {
  registerStatus: "idle",
  loggedInUserStatus: "idle",
  getMeStatus: "idle",
  me: [],
  loggedInDetails: [],
};

export const registerUser = createAsyncThunk(
  "registerUser",
  async ({ name, password, email }) => {
    const resposne = await axios.post(`${API_ROOT_URL}/register`, {
      name,
      password,
      email,
    });
    return resposne.data;
  }
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ password, email }) => {
    const resposne = await axios.post(`${API_ROOT_URL}/login`, {
      password,
      email,
    });
    return resposne.data;
  }
);

export const getMe = createAsyncThunk("getMe", async ({ id }) => {
  const response = await axios.get(`${API_ROOT_URL}/${id}`);
  return response.data;
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    resetLoginReduxState: (state, action) => {
      state.registerStatus = "idle";
      state.loggedInUserStatus = "idle";
      state.getMeStatus = "idle";
      state.me = [];
      state.loggedInDetails = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.registerStatus = "pending";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = "success";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = "rejected";
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loggedInUserStatus = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loggedInUserStatus = "success";
        state.me = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loggedInUserStatus = "rejected";
      })
      .addCase(getMe.pending, (state, action) => {
        state.getMeStatus = "pending";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.getMeStatus = "success";
        state.me = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.getMeStatus = "rejected";
      });
  },
});
export const { resetLoginReduxState } = loginSlice.actions;
export default loginSlice.reducer;
