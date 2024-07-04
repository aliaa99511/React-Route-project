import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}
const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: () => {

        }
    }
})