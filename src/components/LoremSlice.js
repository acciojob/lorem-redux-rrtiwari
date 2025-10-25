import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import "regenerator-runtime/runtime";

export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    title: "",
    body: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.title = action.payload.title;
        state.body = action.payload.body;
      })
      .addCase(fetchLorem.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      });
  },
});

export default loremSlice.reducer;
