import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rocket: [],
  isLoading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const rocketData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }))
    return rocketData;
  } catch(error) {
    return error;
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rocket = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export default rocketSlice.reducer;