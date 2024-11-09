import { Button, Form, Input, Flex } from "antd"
import { clearSearchBar, setSearchBar } from "../riceInspectionSlice"
import { useDispatch } from "react-redux"
import { SearchOutlined } from "@ant-design/icons"

export default function SearchBar() {
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	// const data = useSelector((state) => state.riceInspection);
	// console.log(data);

	async function onSubmit(data) {
		dispatch(setSearchBar(data))
		console.log(data)
	}

	async function clearData() {
		form.setFieldsValue({
			id: "",
		})
		dispatch(clearSearchBar())
	}

	return (
		<Form form={form} onFinish={onSubmit} layout="vertical">
			<Form.Item label="ID" name="id">
				<Input placeholder="Search with ID" />
			</Form.Item>
			<Flex justify="space-between">
				<Form.Item>
					<Button type="second" className="text-red-600 underline" onClick={() => clearData()}>
						Clear filter
					</Button>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						<SearchOutlined />
						Search
					</Button>
				</Form.Item>
			</Flex>
		</Form>
	)
}
