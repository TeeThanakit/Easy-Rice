import { useParams } from "react-router-dom"
import { Button, Form, Input, Flex, Image } from "antd"
import { Row, Col } from "antd"

export default function RiceInspectionViewById() {
	const [form] = Form.useForm()
	const { id } = useParams()
	return (
		<>
			<h1>Inspection</h1>
			<Flex>
				<Flex vertical={true} style={{ width: "33%" }}>
					<Flex justify="flex-end">
						<Image width={250} src="../public/riceImage.jpg" />
					</Flex>
					<Flex justify="flex-end" gap="small" style={{ marginTop: "10px" }}>
						<Button>Back</Button>
						<Button className="bg-primary text-white">Edit</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
