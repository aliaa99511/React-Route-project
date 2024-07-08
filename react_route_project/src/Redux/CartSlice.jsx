import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    error: null
}


// export const ShoppingCartData =

let cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(ShoppingCartData)
    }

})