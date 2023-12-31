import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../features/productListSlice";
import viewProductModalReducer from "../features/viewProductModalSlice";
import cartReducer from "../features/cartSlice";
import cartNotificationReducer from "../features/cartNotificationSlice";

export const reduxStore = configureStore({
    reducer: {
        productList: productListReducer,
        viewProductModal: viewProductModalReducer,
        cart: cartReducer,
        cartNotifications: cartNotificationReducer,
    },
})