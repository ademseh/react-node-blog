import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlogs as fetchBlogsAPI } from "../../service/blog";

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  let blogs = await fetchBlogsAPI();
  return blogs;
});

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogs.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
    [fetchBlogs.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default counterSlice.reducer;
