import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const FetchEvents = createAsyncThunk(
  'Country/FetchEvents',

  async (_, thunkAPI) => {
    const url = 'https://app.ticketmaster.com/discovery/v2/events.json?size=6&countryCode=CA&classificationName=Professional&apikey=7KBAIQZR5JiH4pE3CMdHPToUvYySPND8';
    try {
      const resp = await fetch(url);
      return resp.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },

);

const initialState = {
  events: [],
  isLoading: false,
};

const EventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(FetchEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        // eslint-disable-next-line no-underscore-dangle
        const data = action.payload._embedded.events;
        console.log(data);
        state.events = data;
      })
      .addCase(FetchEvents.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default EventSlice.reducer;
