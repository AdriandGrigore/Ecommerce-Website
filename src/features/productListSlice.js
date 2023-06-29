import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    productListLoading: false,
    productList: [],
    filteredList: [],
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
    reducers: {
        filterCategory: ((state, { payload }) => {
            state.filteredList =
                payload === "All Products"
                    ? state.productList
                    : state.productList.filter(product => product.category === payload)
        })
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.productListLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
            state.productListLoading = false
            state.productList = payload
            state.filteredList = payload
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.productListLoading = false
            state.productListError = true
        })
    }
})

export default productListSlice.reducer
export const { filterCategory } = productListSlice.actions