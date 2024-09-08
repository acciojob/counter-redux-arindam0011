import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state + action.payload
        },
        decrement(state, action) {
            if (state <= 0) return 0;
            return state - action.payload
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer