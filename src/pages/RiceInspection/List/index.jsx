import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { Table, Flex } from "antd"
import { columns } from "../columns"
import { setSelectedRowKeys } from "../riceInspectionSlice"
import { useDispatch, useSelector } from "react-redux"
import { data } from "../data"
import SearchBar from "../components/SearchBar"
import { deleteHistory } from "../riceInspectionAction"

export default function InspectionList() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const selectedRowKeys = useSelector((state) => state.riceInspection.selectRow.selectedRowKeys)
	const onSelectChange = (newSelectedRowKeys) => {
		dispatch(setSelectedRowKeys(newSelectedRowKeys))
	}

	async function onDelete() {
		console.log(selectedRowKeys)
		dispatch(deleteHistory({ selectedRowKeys }))
	}

	return (
		<Flex vertical={true}>
			<Button className="bg-primary ml-auto" onClick={() => navigate("/createInspection")}>
				+ Create Inspection
			</Button>
			<SearchBar />
			<div className="h-10">
				{selectedRowKeys.length > 0 ? (
					<Flex className="gap-5">
						<Button onClick={() => onDelete()}>Delete</Button>
						<p>
							Select items: {selectedRowKeys.length} {selectedRowKeys.length > 1 ? "items" : "item"}
						</p>
					</Flex>
				) : (
					""
				)}
			</div>
			<Table
				rowSelection={{
					selectedRowKeys,
					onChange: onSelectChange,
				}}
				columns={columns}
				dataSource={data}
			/>
		</Flex>
	)
}
