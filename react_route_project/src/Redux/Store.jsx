import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterSlice";
import { productReducer } from "./ProductSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer,
    }
})