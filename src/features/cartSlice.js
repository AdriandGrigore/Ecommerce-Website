import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addItemToCart: ((state, { payload }) => {
            state.cartItems = [...state.cartItems, payload]
        }),
        increaseCartItemQt: ((state, { payload }) => {
            state.cartItems = state.cartItems.map(product => {
                if (payload.id === product.id) {
                    return { ...product, quantity: product.quantity + payload.amount };
                } else {
                    return product;
                }
            });
        }),
        decreaseCartItemQt: ((state, { payload }) => {
            state.cartItems = state.cartItems.map(product => {
                if (payload === product.id) {
                    return { ...product, quantity: product.quantity - 1 };
                } else {
                    return product;
                }
            });
        }),
        removeCartItem: ((state, { payload }) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload)
        })
    }
})

export default cartSlice.reducer
export const { addItemToCart, increaseCartItemQt, decreaseCartItemQt, removeCartItem } = cartSlice.actions