import { formatNumber } from "../../../helper/func"

export function getDescriptions({ data }) {
	const firstItems = [
		{
			key: "1",
			label: "Create Date - Time",
			children: new Date(data?.createDate).toLocaleString(),
		},
		{
			key: "2",
			label: "Inspection ID:",
			children: data?.inspectionID,
		},
		{
			key: "3",
			label: "Standard",
			children: data?.standardName,
		},
		{
			key: "4",
			label: "Total sample",
			children: data?.totalSample,
		},
		{
			key: "5",
			label: "Update Date - Time:",
			children: new Date(data?.updateDate).toLocaleString(),
		},
	]

	const secondItems = [
		{
			key: "1",
			label: "Note",
			children: data?.note,
		},
		{
			key: "2",
			label: "Price",
			children: data?.price && formatNumber(data?.price, 2),
		},
		{
			key: "3",
			label: "Date/Time of Sampling",
			children: new Date(data?.samplingDate).toLocaleString(),
		},
		{
			key: "4",
			label: "Sampling Point",
			children: data?.samplingPoint?.join(", "),
		},
	]

	const thirdItems = [
		{
			title: "Name",
			dataIndex: "standardData",
			key: "name",
			render: (name) => <span>{name}</span>,
		},
		{
			title: "Length",
			dataIndex: "standardData",
			key: "length",
			render: (standardData) => <span>{standardData.length}</span>,
		},
		{
			title: "Actual",
			dataIndex: "standardData",
			key: "actual",
			render: (standardData) => <span>{standardData.actual}</span>,
		},
	]

	return { firstItems, secondItems, thirdItems }
}
