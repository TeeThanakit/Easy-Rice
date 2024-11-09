import { configureStore } from "@reduxjs/toolkit"
import riceInspectionReducer from "../pages/RiceInspection/riceInspectionSlice"

export const store = configureStore({
	reducer: { riceInspection: riceInspectionReducer },
})
