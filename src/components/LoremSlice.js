import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import "regenerator-runtime/runtime";

export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    content: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;
