import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Input, Flex, Image, Descriptions, Row, Col, Table } from "antd"
import { getDescriptions } from "./columns"
import { getRiceInspectionById } from "../riceInspectionAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export default function RiceInspectionViewById() {
	const [form] = Form.useForm()
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const data = useSelector((state) => state.riceInspection)
	useEffect(() => {
		async function getById() {
			dispatch(getRiceInspectionById({ id }))
		}
		getById()
	}, [])

	const { firstItems, secondItems, thirdItems } = getDescriptions(data)
	return (
		<>
			<h1 className="text-center my-5 text-4xl">Inspection</h1>
			<Flex className="gap-5">
				<Flex vertical={true} style={{ width: "32%" }}>
					<Flex justify="flex-end">
						<Image width={250} src="../public/riceImage.jpg" />
					</Flex>
					<Flex justify="flex-end" gap="small" style={{ marginTop: "10px" }}>
						<Button onClick={() => navigate("/")}>Back</Button>
						<Button className="bg-primary text-white" onClick={() => navigate(`/edit/${id}`)}>
							Edit
						</Button>
					</Flex>
				</Flex>
				<Flex vertical={true} style={{ width: "65%" }} className="bg-gray-100 p-5 rounded">
					<div className="bg-white p-5 rounded-lg shadow-md w-full my-3">
						<Descriptions items={firstItems} column={2} />
					</div>
					<div className="bg-white p-5 rounded-lg shadow-md w-full my-3">
						<Descriptions items={secondItems} column={2} />
					</div>
					{/* <div className="bg-white p-5 rounded-lg shadow-md w-full my-3">
						{!data?.loading && <Table dataSource={data?.data?.standard} columns={thirdItems} />}
					</div> */}
					{/* <div className="bg-white p-5 rounded-lg shadow-md w-full my-3">
						<Descriptions items={secondItems} column={2} />
					</div> */}
				</Flex>
			</Flex>
		</>
	)
}
