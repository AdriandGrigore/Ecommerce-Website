import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    productListLoading: false,
    productList: [],
    productListError: false,
}

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = res.json()

    return data
})

const productListSlice = createSlice({
    name: "productListSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.productListLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
            state.productList = payload
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.productListError = true
        })
    }
})

export default productListSlice.reducer