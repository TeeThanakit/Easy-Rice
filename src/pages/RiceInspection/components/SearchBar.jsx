import { Button, Form, Input, Flex, DatePicker } from "antd"
import { clearSearchBar } from "../riceInspectionSlice"
import { useDispatch } from "react-redux"
import { SearchOutlined } from "@ant-design/icons"
import { getRiceInspectionListPage } from "../riceInspectionAction"

export default function SearchBar() {
	const dispatch = useDispatch()
	const [form] = Form.useForm()

	async function onSubmit(data) {
		dispatch(getRiceInspectionListPage({ endpoint: "/history", params: data }))
	}

	async function clearData() {
		form.setFieldsValue({
			id: "",
			formDate: "",
			toDate: "",
		})
		dispatch(clearSearchBar())
	}

	return (
		<div className="bg-white p-5 rounded-lg shadow-md w-full my-3">
			<Form form={form} onFinish={onSubmit} layout="vertical">
				<Flex style={{ display: "flex", width: "100%", gap: "16px" }}>
					<Form.Item label="ID" name="id" style={{ flex: 1 }}>
						<Input placeholder="Search with ID" />
					</Form.Item>
					<Form.Item label="Form date" name="formDate" style={{ flex: 1 }}>
						<DatePicker placeholder="Please select Form date" style={{ width: "100%" }} format="DD-MM-YYYY" />
					</Form.Item>
					<Form.Item label="To date" name="toDate" style={{ flex: 1 }}>
						<DatePicker placeholder="Please select to date" style={{ width: "100%" }} format="DD-MM-YYYY" />
					</Form.Item>
				</Flex>
				<Flex justify="space-between">
					<Form.Item>
						<Button type="second" className="text-red-600 underline" onClick={() => clearData()}>
							Clear filter
						</Button>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="bg-primary">
							<SearchOutlined />
							Search
						</Button>
					</Form.Item>
				</Flex>
			</Form>
		</div>
	)
}
