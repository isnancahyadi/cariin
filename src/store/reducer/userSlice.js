const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    reset: (state) => initialState,
  },
});

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;
