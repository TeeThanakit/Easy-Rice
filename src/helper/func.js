export function formatNumber(number, decimalPoints) {
	const formattedNumber = number.toFixed(decimalPoints)
	return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}