import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Main = lazy(() => import("./temp"))

const routes = [{ path: "/", element: <Main />, index: true }]

export default function Router() {
	return (
		<Routes>
			{routes.map((route) => {
				return <Route index={route.index} key={route.path} path={route.path} element={route.element} />
			})}

			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	)
}
