import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../features/productListSlice";

export const reduxStore = configureStore({
    reducer: {
        productList: productListReducer
    },
})