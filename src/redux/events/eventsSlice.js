import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchEvents = createAsyncThunk(
    'Country/FetchEvents',
    
    async(_,thunkAPI) => {
        const url = 'https://app.ticketmaster.com/discovery/v2/events.json?size=6&countryCode=US&classificationName=Professional&apikey=7KBAIQZR5JiH4pE3CMdHPToUvYySPND8';
        try {
            const resp = await fetch(url);
            return resp.json();
        }
        catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }

)

const initialState = {
  events: [],
  isLoading: false,
};

const EventSlice = createSlice ( {
    name: "events",
    initialState,
    reducers: [],
    extraReducers: (builder) =>{
        builder
        .addCase(FetchEvents.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(FetchEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            const data = action.payload._embedded.events;
            console.log(data);
            const eventsnew = data.map((event) => ({
                id: event.id,
                name: event.name,
                genre: event.classifications[0].segment.name,
                image: event.images[0].url,
                date : event.dates.start.dateTime,
                price: event.priceRanges[0].min+' ' + event.priceRanges[0].currency,

            }))
            state.events = eventsnew;
            console.log(state.events);
        })
        .addCase(FetchEvents.rejected, (state) => {
            state.isLoading = false;
          });
    }
})

export default EventSlice.reducer;