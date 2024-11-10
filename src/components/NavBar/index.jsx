import { Button } from "antd"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
	// const navigate = useNavigate()
	// onClick={() => navigate("/")}
	return (
		<div className="bg-gray-200 h-10 w-full flex items-center pl-4">
			<div className="container mx-auto px-4">
				<Button type="second" className="uppercase font-semibold" >
					EasyRice Test
				</Button>
			</div>
		</div>
	)
}
