import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../features/productListSlice";
import viewProductModalReducer from "../features/viewProductModalSlice"

export const reduxStore = configureStore({
    reducer: {
        productList: productListReducer,
        viewProductModal: viewProductModalReducer
    },
})