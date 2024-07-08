import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    cartItems: [],
    error: null
}

let headers = {
    token: localStorage.getItem('token')
}


export const fetchShoppingCart = createAsyncThunk('cartItems/getShoppingCartItems', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers })
        return data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


let cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(ShoppingCartData)
        builder.addCase(fetchShoppingCart.fulfilled, (state, action) => {
            state.cartItems = action.payload
            state.error = null

        })
            .addCase(fetchShoppingCart.rejected, (state, action) => {
                state.error = action.payload
            })
    }

})

export const cartReducer = cartSlice.reducer