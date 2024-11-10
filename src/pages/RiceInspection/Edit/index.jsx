import RiceInspectionForm from "../components/RiceInspectionForm"
import { useParams } from "react-router-dom"
import { getRiceInspectionById } from "../riceInspectionAction"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export default function EditRiceInspection() {
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		async function getById() {
			dispatch(getRiceInspectionById({ id }))
		}
		getById()
	}, [])
	const data = useSelector((state) => state.riceInspection)

	return (
		<>
			<h1>Edit Inspection {id}</h1>
			<RiceInspectionForm formType={"EDIT"} id={id} data={data.data} />
		</>
	)
}
