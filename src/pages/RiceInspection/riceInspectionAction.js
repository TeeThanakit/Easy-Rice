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

export const getStandard = createAsyncThunk("/standard", async (_, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.get("/standard")
		return response.data
	} catch (error) {
		return rejectWithValue(error.response ? error.response.data : error.message)
	}
})

export const getRiceInspectionById = createAsyncThunk("/history/:id", async ({ id }, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.get(`/history/${id}`)
		return response.data
	} catch (error) {
		return rejectWithValue(error.response ? error.response.data : error.message)
	}
})

export const editRiceInspection = createAsyncThunk("/history", async (payload, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.post("/history", payload)
		return response.data
	} catch (error) {
		return rejectWithValue(error.response ? error.response.data : error.message)
	}
})

export const deleteHistory = createAsyncThunk(
	"delete/history",
	async ({ selectedRowKeys }, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.delete("/history", {
				data: { ids: selectedRowKeys },
			})
			return response.data
		} catch (error) {
			return rejectWithValue(error.response ? error.response.data : error.message)
		}
	},
)
