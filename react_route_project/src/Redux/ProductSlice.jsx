import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    error: null,
};

export const fetchAllProducts = createAsyncThunk('product/getProducts', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const productReducer = productSlice.reducer;
