import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        value : new Date().toLocaleTimeString(),
    }, reducers: {
        tick: (state) => {
            state.value = new Date().toLocaleTimeString()
        }
    }
})

// Action creators are generated for each case reducer function
export const { tick } = clockSlice.actions

export default clockSlice.reducer

