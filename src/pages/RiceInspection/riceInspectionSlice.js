import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	loading: false,
	selectRow: { selectedRowKeys: [] },
	searchBar: null,
	error: null,
}

const riceInspection = createSlice({
	name: "riceInspection",
	initialState,
	reducers: {
		setSelectedRowKeys: (state, action) => {
			state.selectRow.selectedRowKeys = action.payload
		},
		setSearchBar: (state, action) => {
			state.searchBar = action.payload.id
		},
		clearSearchBar: (state) => {
			state.searchBar = null
		},
	},
	extraReducers: (builder) => {},
})

export const { setSelectedRowKeys, clearSearchBar, setSearchBar } = riceInspection.actions
export default riceInspection.reducer
