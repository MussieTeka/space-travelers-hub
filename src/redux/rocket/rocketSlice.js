import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocket: [],
  isLoading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk(
  'rocket/fetchRockets',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      const rocketData = response.data.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        image: rocket.flickr_images[0],
      }));
      return rocketData;
    } catch (error) {
      return error;
    }
  },
);

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;
      const updatedRocket = state.rocket.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserve: true };
        }
        return rocket;
      });
      return {
        ...state,
        rocket: updatedRocket,
      };
    },
    cancelReserve: (state, action) => {
      const { id } = action.payload;
      const updatedRockets = state.rocket.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserve: false };
        }
        return rocket;
      });
      return {
        ...state,
        rocket: updatedRockets,
      };
    },
  },
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
  },
});

export const { reserveRocket, cancelReserve } = rocketSlice.actions;

export default rocketSlice.reducer;
