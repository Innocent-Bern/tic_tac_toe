import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../socket";

export const socketSlice = createSlice({
    name: 'socketconnection',
    initialState: {
        value : false
    }, reducers: {
        connect: (state) => {
            state.value = socket.connect()
        },
        disconnect: (state) => {
            state.value = socket.disconnect()
        }
    }
})
export const { connect, disconnect} = socketSlice.actions

export default socketSlice.reducer
