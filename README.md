# Lorem Redux

Fetch an lorem ipsum API using redux and display the content on page

<ins>**OUTPUT:**</ins>

![output](https://storage.googleapis.com/acciojob-open-file-collections/lorem-redux.gif)


createAsyncThunk automatically generates three actions:

fetchLorem.pending → dispatched when the request starts

fetchLorem.fulfilled → dispatched when the request succeeds

fetchLorem.rejected → dispatched if the request fails

These actions are not manually written in your reducers field.

Instead, you handle them in the extraReducers field using builder.addCase:

builder
  .addCase(fetchLorem.pending, (state) => { state.loading = true; })
  .addCase(fetchLorem.fulfilled, (state, action) => { state.content = action.payload; state.loading = false; })
  .addCase(fetchLorem.rejected, (state, action) => { state.error = action.error.message; state.loading = false; });

3️⃣ Why we use addCase

addCase connects your slice to the automatically generated actions from createAsyncThunk.

It allows you to update state based on async request status (pending, fulfilled, rejected).

You cannot handle async thunks in the reducers field — that only works for synchronous actions.



What is createAsyncThunk?

createAsyncThunk is a helper function from Redux Toolkit that makes handling asynchronous logic (like API calls) much easier.

It automatically generates actions for the three stages of an async process:

Pending → when the request starts

Fulfilled → when the request succeeds

Rejected → when the request fails

Why use it?

Normally, with Redux, async calls are messy. You’d have to:

Write action types (FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR)

Write action creators for each

Write reducers to handle them

With createAsyncThunk, all of this is handled automatically.