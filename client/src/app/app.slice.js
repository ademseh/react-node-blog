import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
})

const initialState = {
    blogs:[],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: { //asenkron işlem yapılamıyor.
    
  },
  extraReducers:{
    [fetchBlogs.fulfilled]: (state,action) => {
      state.blogs = action.payload.data  
    }
  }
})

// Action creators are generated for each case reducer function
export const {  } = appSlice.actions

export default appSlice.reducer