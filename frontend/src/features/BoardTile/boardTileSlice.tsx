import { createSlice } from "@reduxjs/toolkit";

export const boardTileSlice = createSlice({
	name: 'boardTile',
	initialState: {
		clickCount: 0,
		whole_board : "x",
		tile_a: {
			toggle: false,
			val: ""
		},
		tile_b: {
			toggle: false,
			val: ""
		},
		tile_c: {
			toggle: false,
			val: ""
		},
		tile_d: {
			toggle: false,
			val: ""
		},
		tile_e: {
			toggle: false,
			val: ""
		},
		tile_f: {
			toggle: false,
			val: ""
		},
		tile_g: {
			toggle: false,
			val: ""
		},
		tile_h: {
			toggle: false,
			val: ""
		},
		tile_i: {
			toggle: false,
			val: ""
		},
	}, reducers: {
		whole_board: (state) => {
			state.whole_board = state.whole_board == "X"? "O" : "X"
		},
		tile_a: (state) => {
			if (state.tile_a.toggle == false)
			{
				state.tile_a.toggle = true
				state.whole_board == "X"? 
				state.tile_a.val = "X":
				state.tile_a.val = "O"
			}
		},
		tile_b: (state) => {
			if (state.tile_b.toggle == false)
			{
				state.tile_b.toggle = true
				state.whole_board == "X"? 
				state.tile_b.val = "X":
				state.tile_b.val = "O"
			}
		},
		tile_c: (state) => {
			if (state.tile_c.toggle == false)
			{
				state.tile_c.toggle = true
				state.whole_board == "X"? 
				state.tile_c.val = "X":
				state.tile_c.val = "O"
			}
		},
		tile_d: (state) => {
			if (state.tile_d.toggle == false)
			{
				state.tile_d.toggle = true
				state.whole_board == "X"? 
				state.tile_d.val = "X":
				state.tile_d.val = "O"
			}
		},
		tile_e: (state) => {
			if (state.tile_e.toggle == false)
			{
				state.tile_e.toggle = true
				state.whole_board == "X"? 
				state.tile_e.val = "X":
				state.tile_e.val = "O"
			}
		},
		tile_f: (state) => {
			if (state.tile_f.toggle == false)
			{
				state.tile_f.toggle = true
				state.whole_board == "X"? 
				state.tile_f.val = "X":
				state.tile_f.val = "O"
			}
		},
		tile_g: (state) => {
			if (state.tile_g.toggle == false)
			{
				state.tile_g.toggle = true
				state.whole_board == "X"? 
				state.tile_g.val = "X":
				state.tile_g.val = "O"
			}
		},
		tile_h: (state) => {
			if (state.tile_h.toggle == false)
			{
				state.tile_h.toggle = true
				state.whole_board == "X"? 
				state.tile_h.val = "X":
				state.tile_h.val = "O"
			}
		},
		tile_i: (state) => {
			if (state.tile_i.toggle == false)
			{
				state.tile_i.toggle = true
				state.whole_board == "X"? 
				state.tile_i.val = "X":
				state.tile_i.val = "O"
			}
		},
	}
})

//Action creators are generated for each reducer function
export const { 
	whole_board, 
	tile_a, tile_b, tile_c, 
	tile_d, tile_e, tile_f,
	tile_g, tile_h, tile_i} = boardTileSlice.actions

export default boardTileSlice.reducer
