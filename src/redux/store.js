import { configureStore } from "@reduxjs/toolkit";
import eventsSliceReducer from "./events/eventsSlice";

const store = configureStore ({
    reducer: {
      events: eventsSliceReducer,
    }
})


export default store;