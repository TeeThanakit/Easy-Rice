import { Button } from "antd"

export default function NavBar() {
	return (
		<div className="bg-gray-200 h-10 w-full flex items-center pl-4">
			<div className="container mx-auto px-4">
				<Button type="second" className="uppercase font-semibold">
					EasyRice Test
				</Button>
			</div>
		</div>
	)
}
