import { Form } from "antd"
import RiceInspectionForm from "../components/RiceInspectionForm"

export default function InspectionForm() {
	const [form] = Form.useForm()

	return (
		<div>
			<h1>Create Inspection</h1>
			<RiceInspectionForm formType={"CREATE"} form={form} />
		</div>
	)
}
