import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const EditButton = ({ id }) => {
	const navigate = useNavigate()
	return (
		<Button type="second" onClick={() => navigate(`/history/${id}`)}>
			View
		</Button>
	)
}

export const columns = [
	{
		title: "Create Date - Time",
		dataIndex: "create_at",
		key: "create_at",
	},
	{
		title: "Inspection ID",
		dataIndex: "key",
		key: "id",
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Standard",
		dataIndex: "standard",
		key: "standard",
	},
	{
		title: "Note",
		dataIndex: "note",
		key: "note",
	},
	{
		title: "",
		key: "action",
		render: (_, record) => <EditButton id={record.key} />,
	},
]
