import { Button, Form, Input, Flex } from "antd"
import RiceInspectionForm from "../components/RiceInspectionForm"
import { useParams } from "react-router-dom"
import { getRiceInspectionById } from "../riceInspectionAction"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export default function EditRiceInspection() {
	const [form] = Form.useForm()
	const { id } = useParams()
	const dispatch = useDispatch()
    
    // form={form}
	useEffect(() => {
		async function getById() {
			dispatch(getRiceInspectionById({ id }))
		}
		getById()
	}, [])
	const data = useSelector((state) => state.riceInspection)
    if (data.loading || !data.data) {
        return <div>Loading...</div>; // Or show a default state while loading
    }
    // form={form}
	return (
		<>
			<h1>Edit Inspection {id}</h1>
			<RiceInspectionForm  formType={"EDIT"} id={id}  data={data.data} />
		</>
	)
}
