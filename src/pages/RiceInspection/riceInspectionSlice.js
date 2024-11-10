import { createSlice } from "@reduxjs/toolkit"
import { fetchData, getRiceInspectionListPage, getRiceInspectionById } from "./riceInspectionAction"

const initialState = {
	loading: false,
	selectRow: { selectedRowKeys: [] },
	data: null,
	searchBar: "",
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
			state.searchBar = ""
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload || "Failed to fetch data"
			})
		builder
			.addCase(getRiceInspectionListPage.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(getRiceInspectionListPage.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(getRiceInspectionListPage.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload || "Failed to fetch data"
			})
		builder
			.addCase(getRiceInspectionById.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(getRiceInspectionById.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(getRiceInspectionById.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload || "Failed to fetch data"
			})
	},
})

export const { setSelectedRowKeys, clearSearchBar, setSearchBar, setRequest } = riceInspection.actions
export default riceInspection.reducer
