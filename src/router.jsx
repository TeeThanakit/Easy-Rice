import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Spin } from "antd"

const InspectionList = lazy(() => import("./pages/RiceInspection/List"))
const CreateInspection = lazy(() => import("./pages/RiceInspection/Create"))
const RiceInspectionViewById = lazy(() => import("./pages/RiceInspection/View"))
const EditRiceInspection = lazy(() => import("./pages/RiceInspection/Edit"))

const routes = [
	{ path: "/", element: <InspectionList />, index: true },
	{ path: "/createInspection", element: <CreateInspection /> },
	{ path: "/history/:id", element: <RiceInspectionViewById /> },
	{ path: "/edit/:id", element: <EditRiceInspection /> },
]

export default function Router() {
	return (
		<Suspense fallback={<Spin />}>
			<Routes>
				{routes.map((route) => {
					return <Route index={route.index} key={route.path} path={route.path} element={route.element} />
				})}
			</Routes>
		</Suspense>
	)
}
