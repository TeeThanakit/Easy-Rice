import { Button, Upload, Form, Input, Space, Select, InputNumber, Checkbox, DatePicker } from "antd"
import { samplingPoints } from "../components/const"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { UploadOutlined } from "@ant-design/icons"
import { editRiceInspection, createRiceInspection } from "../riceInspectionAction"
import { useNavigate } from "react-router-dom"
import moment from "moment"

export default function RiceInspectionForm({ formType, id, data }) {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	
	const onFileUpload = (file) => {
		const reader = new FileReader()
		reader.onload = (e) => {
			const json = JSON.parse(e.target.result)
			console.log(json)
		}
		reader.readAsText(file)
		return false
	}

	useEffect(() => {
		if (formType === "EDIT" && data) {
			form.setFieldsValue({
				note: data.note,
				price: data.price,
				samplingPoint: data.samplingPoint,
				samplingDate: data?.samplingDate ? moment(data.samplingDate) : null,
			})
		}
	}, [])

	async function onSubmit(data) {
		if (formType === "CREATE") {
			dispatch(createRiceInspection({ data, actionType: formType }))
		} else if (formType === "EDIT") {
			dispatch(editRiceInspection({ data, id, actionType: formType }))
		}
	}

	return (
		<div className="p-4 w-3/5 mx-auto">
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
							label="Standard"
							name="standard"
							rules={[
								{
									required: true,
									message: "Please Select standard",
								},
							]}
						>
							<Select
								showSearch
								placeholder="Please Select Standard"
								optionFilterProp="label"
								options={data}
							/>
						</Form.Item>
						<Form.Item label="Upload JSON File" name="uploadFile">
							<Upload beforeUpload={onFileUpload}>
								<Button icon={<UploadOutlined />}>Click to Upload</Button>
							</Upload>
						</Form.Item>
					</>
				)}
				<Form.Item label="Note" name="note">
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
							<Button onClick={() => navigate(formType === "EDIT" ? `/history/${id}` : "/")}>Cancel</Button>
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
