import { Form } from "antd"
import RiceInspectionForm from "../components/RiceInspectionForm"
import { getStandard } from "../riceInspectionAction"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export default function InspectionForm() {
	const [form] = Form.useForm()
	const dispatch = useDispatch()

	useEffect(() => {
		async function getStandardList() {
			dispatch(getStandard())
		}
		getStandardList()
	}, [])
	const data = useSelector((state) => state.riceInspection)
	return (
		<>
			<h1 className="text-4xl text-center my-5">Create Inspection</h1>
			<RiceInspectionForm formType={"CREATE"} form={form} data={data.standard} />
		</>
	)
}
