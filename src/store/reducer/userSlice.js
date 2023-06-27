import axios from "axios";
import { getCookie } from "cookies-next";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  // if (!getCookie(process.env.NEXT_PUBLIC_TOKEN_NAME)) {
  //   return;
  // }
  try {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_PROFILE);
    return data?.data;
  } catch (error) {
    // console.log("error ges");
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.data = action.payload;
    // },
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "error";
    });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
