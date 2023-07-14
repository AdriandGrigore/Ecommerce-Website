import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartNotification: {
        status: false,
        type: ""
    }
}

const cartNotificationSlice = createSlice({
    name: "cartNotificationSlice",
    initialState,
    reducers: {
        showCartNotification: ((state, { payload }) => {
            state.cartNotification = { status: true, type: payload }
        }),
        hideCartNotification: () => {
            return initialState
        },
    }
})

export default cartNotificationSlice.reducer
export const { showCartNotification, hideCartNotification } = cartNotificationSlice.actions