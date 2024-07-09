import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    cartItems: [],
    totalPrice: 0,
    numOfCartItems: 0,
    error: null,
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
    });

export const updateCartProductQuantity = createAsyncThunk(
    'cartItems/updateCartQuantity',
    async ({ id, count }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count }, { headers });
            console.log("Update Cart Quantity Response", data);
            return data;
        } catch (error) {
            console.error("Update Cart Quantity Error:", error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
);

export const fetchCartCount = createAsyncThunk(
    'cartItems/fetchCartCount',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers });
            return data.numOfCartItems;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

let cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShoppingCart.fulfilled, (state, action) => {
                console.log('Fetched Cart:', action.payload);
                state.cartItems = action.payload.products || [];
                state.totalPrice = action.payload.totalCartPrice || 0;
                state.error = null;
            })
            .addCase(fetchShoppingCart.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                console.log('Removed CartItem:', action.payload);
                state.cartItems = state.cartItems.filter(item => item._id !== action.meta.arg);
                state.error = null;
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(updateCartProductQuantity.fulfilled, (state, action) => {
                console.log('Updated Cart Quantity:', action.payload);
                // Update the specific item's quantity in the cart
                const index = state.cartItems.findIndex(item => item._id === action.meta.arg.id);
                if (index !== -1) {
                    state.cartItems[index].count = action.meta.arg.count;
                }
                state.error = null;
            })
            .addCase(updateCartProductQuantity.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(fetchCartCount.fulfilled, (state, action) => {
                state.numOfCartItems = action.payload;
            })
            .addCase(fetchCartCount.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});

export const cartReducer = cartSlice.reducer;
