import { createSlice } from "@reduxjs/toolkit"
import {
	getRiceInspectionListPage,
	getRiceInspectionById,
	editRiceInspection,
	deleteHistory,
	getStandard,
} from "./riceInspectionAction"

const initialState = {
	loading: false,
	selectRow: { selectedRowKeys: [] },
	data: null,
	standard: "",
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
				state.error = action.payload || "Failed to fetch rice inspection by id"
			})
		builder
			.addCase(getStandard.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(getStandard.fulfilled, (state, action) => {
				state.loading = false
				state.standard = action.payload
			})
			.addCase(getStandard.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload || "Failed to fetch standard"
			})
		builder
			.addCase(editRiceInspection.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(editRiceInspection.fulfilled, (state) => {
				state.loading = false
			})
			.addCase(editRiceInspection.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload || "Failed to fetch data"
			})
		builder
			.addCase(deleteHistory.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteHistory.fulfilled, (state) => {
				state.loading = false
			})
			.addCase(deleteHistory.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload || "Failed to fetch data"
			})
	},
})

export const { setSelectedRowKeys, clearSearchBar, setSearchBar, setRequest } = riceInspection.actions
export default riceInspection.reducer
