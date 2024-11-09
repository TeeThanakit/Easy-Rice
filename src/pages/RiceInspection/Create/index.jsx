import { Button, Form, Input, Space } from "antd"
import { useNavigate } from "react-router-dom"

export default function InspectionForm() {
	const navigate = useNavigate()

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<div>
			<h1>Create Inspection</h1>
			<Form onFinish={onSubmit} layout="vertical">
				<Form.Item label="Name" name="name" required>
					<Input />
				</Form.Item>
				<Form.Item label="Note" name="note" required>
					<Input />
				</Form.Item>
				<div className="flex justify-end">
					<Space>
						<Form.Item>
							<Button onClick={() => navigate("/")}>Cancel</Button>
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
