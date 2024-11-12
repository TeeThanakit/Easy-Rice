import RiceInspectionForm from "../components/RiceInspectionForm"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export default function EditRiceInspection() {
	const { id } = useParams()

	const data = useSelector((state) => state.riceInspection)

	return (
		<>
			<h1 className="text-center text-4xl my-5">Edit Inspection {id}</h1>
			<RiceInspectionForm formType={"EDIT"} id={id} data={data.data} />
		</>
	)
}
