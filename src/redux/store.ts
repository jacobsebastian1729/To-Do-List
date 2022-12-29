import { configureStore } from "@reduxjs/toolkit";

import listReducer from "./slice/listitem";
import favReducer from "./slice/favoriteitem"

const store = configureStore({
    reducer: {
        resolutionlist: listReducer,
        favoritelist: favReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;