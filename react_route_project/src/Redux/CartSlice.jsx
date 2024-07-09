import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    cartItems: [],
    totalPrice: 0,
    error: null
};

let headers = {
    token: localStorage.getItem('token') || ""
};

export const fetchShoppingCart = createAsyncThunk('cartItems/getShoppingCartItems', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers });
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const removeCartItem = createAsyncThunk(
    'cartItems/removeCartItem',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers });
            console.log('Remove CartItem Response:', data);
            return data;
        } catch (error) {
            console.error('Remove CartItem Error:', error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

// function UpdateCartProductQuantity(id, count) {
//     return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
//         {
//             count,
//         },
//         {
//             headers,
//         }
//     )
//         .then((response) => {
//             return response;
//         })
//         .catch((err) => {
//             console.error('error', err);
//             return err;
//         });
// }



let cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {},

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchShoppingCart.fulfilled, (state, action) => {
    //             console.log('Fetched Cart:', action.payload.data);
    //             state.cartItems = action.payload.products || [];
    //             state.totalPrice = action.payload.totalCartPrice || 0;
    //             state.error = null;
    //         })
    //         // .addCase(fetchShoppingCart.fulfilled, (state, action) => {
    //         //     console.log("action", action);
    //         //     console.log('Fetched Cart:', action.payload.data);
    //         //     state.cartItems = action.payload.data || [];
    //         //     state.error = null;
    //         // })
    //         .addCase(fetchShoppingCart.rejected, (state, action) => {
    //             state.error = action.payload;
    //         })
    //         .addCase(removeCartItem.fulfilled, (state, action) => {
    //             console.log("action", action);
    //             console.log('Removed CartItem:', action.payload);
    //             state.cartItems = state.cartItems.filter(item => item._id !== action.meta.arg);
    //             state.error = null;
    //         })
    //         .addCase(removeCartItem.rejected, (state, action) => {
    //             state.error = action.payload;
    //         });
    // }
});


export const cartReducer = cartSlice.reducer;
