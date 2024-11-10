import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../axiosInstance"

export const getRiceInspectionListPage = createAsyncThunk(
	"get/history",
	async ({ endpoint, params }, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get(endpoint, { params })
			return response.data
		} catch (error) {
			return rejectWithValue(error.response ? error.response.data : error.message)
		}
	},
)

export const getRiceInspectionById = createAsyncThunk("/history/:id", async ({ id }, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.get(`/history/${id}`)
		return response.data
	} catch (error) {
		return rejectWithValue(error.response ? error.response.data : error.message)
	}
})

export const fetchData = createAsyncThunk("data/fetchData", async (endpoint, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.get(endpoint)
		return response.data
	} catch (error) {
		return rejectWithValue(error.response ? error.response.data : error.message)
	}
})

// export const deleteHistory = createAsyncThunk("delete/history", async (endpoint, { rejectWithValue }) => {
// 	try {
// 		const response = await axiosInstance.get(endpoint)
// 		return response.data
// 	} catch (error) {
// 		return rejectWithValue(error.response ? error.response.data : error.message)
// 	}
// })
