const origin = new Date(0)
// ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const months = (style = "long") =>
	[...Array(12).keys()].map((i) => {
		const date = new Date(origin)
		date.setMonth(i)
		return date.toLocaleDateString("fr-FR", { month: style })
	})

const useMonthStrings = () => {
	return {
		months,
		narrowMonthStrings: months("narrow"),
		longMonthStrings: months("long")
	}
}

export default useMonthStrings
