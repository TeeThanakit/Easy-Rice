import { Button, Form, Input, Space, Select, InputNumber, Checkbox, DatePicker } from "antd"
// import { useNavigate } from "react-router-dom"
import { samplingPoints, dummyStandard } from "../components/const"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRiceInspectionById } from "../riceInspectionAction"
import { useNavigate } from "react-router-dom"

export default function RiceInspectionForm({ formType, id, data }) {
	const navigate = useNavigate()
	const [form] = Form.useForm()
	useEffect(() => {
		if (formType === "EDIT" && data && data.id) {
			form.setFieldsValue({
				id: data.id,
			})
		}
	}, [])

	async function onSubmit(data) {
		if (formType === "CREATE") {
			console.log("Create", data)
		} else if (formType === "EDIT") {
			console.log("Edit", data)
		}
	}

	function onCancel() {
		form.resetFields() // Reset form values
		navigate("/")
	}
	// form={form}
	return (
		<div>
			<Form form={form} onFinish={onSubmit} layout="vertical" autoComplete="off">
				{formType === "CREATE" && (
					<>
						<Form.Item
							label="Name"
							name="name"
							rules={[
								{
									required: true,
									message: "Please input name!",
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Select"
							name="Select"
							rules={[
								{
									required: true,
									message: "Please select standard",
								},
							]}
						>
							<Select
								showSearch
								placeholder="Please Select Standard"
								optionFilterProp="label"
								options={dummyStandard}
							/>
						</Form.Item>
						<Form.Item label="Uploade File" name="uploadeFile">
							<Input />
						</Form.Item>
					</>
				)}
				<Form.Item label="Note" name="note">
					<Input />
				</Form.Item>
				<Form.Item label="Test Id" name="id">
					<Input />
				</Form.Item>
				<Form.Item label="Price" name="price">
					<InputNumber
						min="0"
						max="10000"
						step="0.01"
						style={{
							width: "100%",
						}}
					/>
				</Form.Item>
				<Form.Item label="Sampling Points" name="samplingPoint">
					<Checkbox.Group options={samplingPoints} />
				</Form.Item>
				<Form.Item label="Date/Time of Sampling" name="samplingDate">
					<DatePicker
						format="DD-MM-YYYY HH:mm:ss"
						showTime
						style={{
							width: "100%",
						}}
					/>
				</Form.Item>
				<div className="flex justify-end">
					<Space>
						<Form.Item>
							<Button onClick={() => onCancel()}>Cancel</Button>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Space>
				</div>
			</Form>
		</div>
	)
}
