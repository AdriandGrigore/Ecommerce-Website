import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productSelected: { quantity: 1 },
    modalStatus: false
}

const viewProductModalSlice = createSlice({
    name: "viewProductModalSlice",
    initialState,
    reducers: {
        openViewProductModal: ((state, { payload }) => {
            state.productSelected = { ...state.productSelected, ...payload }
            state.modalStatus = true
        }),
        closeViewProductModal: (state => {
            state.modalStatus = false
        })
    }
})

export default viewProductModalSlice.reducer
export const { openViewProductModal, closeViewProductModal } = viewProductModalSlice.actions