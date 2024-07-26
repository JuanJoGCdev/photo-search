import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./reducers/collectionsReducer";


const store = configureStore({
    reducer: {
        collections: collectionsReducer,

    }
})
export default store;