import {
	ComboBoxFormFragment,
	Form,
	NumberFormFragment,
	RadioGroupFormFragment,
	StringFormFragment,
	useValidatedState,
} from "plume-react"
import PropTypes from "prop-types"

const ProductForm = ({ onCancel, onProductSubmit, longMonthStrings }) => {
	const {
		state: product,
		errors,
		setState: setProduct,
		validate,
	} = useValidatedState({
		label: {
			fr: undefined,
		},
		months: undefined,
		emoji: undefined,
		local: undefined,
		pef: undefined,
		CO2: undefined,
	})

	console.log("state", product)
	console.log("errors", product)
	console.log("validate", validate)

	return (
		<Form
			id='product-form-0'
			className='product-form'
			onCancel={onCancel}
			onSubmit={() => {
				const validations = validate({
					label: {
						fr: (it) => {
							if ([undefined, null, ""].includes(it.fr))
								return `Le nom du produit est obligatoire.`
						},
					},
					months: (it) => {
						if ([undefined, null].includes(it.months) || it.months.length < 1)
							return `Au moins un mois doit être sélectionné.`
					},
					pef: (it, _, state) => {
						if ([undefined, null].includes(it.pef))
							return `L'indicateur PEF est obligatoire.`
						if (it.pef < 0 || it.pef > 1)
							return `L'indicateur PEF doit être compris entre 0 et 1.`
						if (it.CO2 >= 1 && it.pef <= 0.2)
							return `Il est impossible d'avoir un indicateur PEF si faible avec un taux kgCO2e/kg si élevé.`
					},
					CO2: (it) => {
						if ([undefined, null].includes(it.CO2))
							return `L'indicateur CO2 est obligatoire.`
						if (it.CO2 < 0) return `L'indicateur CO2 ne peut pas être négatif.`
					},
				})
				validations.throwErrorIfFail()

				return onProductSubmit(product)
			}}
		>
			<StringFormFragment
				id='label'
				label='Nom du produit'
				value={product.label?.fr}
				error={errors.label?.fr}
				onValueChange={(label) =>
					setProduct({ ...product, label: { fr: label } })
				}
				mandatory
			/>
			<StringFormFragment
				id='emoji'
				label='Emoji'
				value={product.emoji}
				hint={
					<span>
						Pour plus de <b>fun</b>, ajouter un emoji 🍋🍇🌶️🧅!
					</span>
				}
				onValueChange={(emoji) => setProduct({ ...product, emoji })}
			/>
			<ComboBoxFormFragment
				id='months'
				label='Mois de production'
				options={longMonthStrings.map((month, i) => ({
					label: month,
					value: i,
					icon: ((m) => {
						switch (m) {
							case 0:
							case 1:
							case 2:
								return "☃️"
							case 3:
							case 4:
							case 5:
								return "🌿"
							case 6:
							case 7:
							case 8:
								return "☀️"
							default:
								return "🍂"
						}
					})(i),
				}))}
				value={product.months}
				error={errors.months}
				onValueChange={(months) => setProduct({ ...product, months })}
				renderOption={({ label, icon }) => `${icon} ${label}`}
				multiple
				mandatory
			/>
			<RadioGroupFormFragment
				id='local'
				label='Est-ce un produit local ?'
				options={[
					{ value: "false", label: "✈️ Non local" },
					{ value: "true", label: "🇫🇷 Local" },
				]}
				value={product.local ? "true" : "false"}
				onValueChange={(local) =>
					setProduct({ ...product, local: local === "true" })
				}
				inlined
			/>
			<div className='product-form-numbers-fragments'>
				<NumberFormFragment
					id='CO2'
					label='CO2'
					formatDescription='1,76 kgCO2e/kg'
					unit='kgCO2e/kg'
					value={product.CO2}
					error={errors.CO2}
					onValueChange={(CO2) => setProduct({ ...product, CO2 })}
					mandatory
				/>
				<NumberFormFragment
					id='pef'
					label='PEF'
					formatDescription='0,11'
					value={product.pef}
					error={errors.pef}
					onValueChange={(pef) => setProduct({ ...product, pef })}
					mandatory
				/>
			</div>
		</Form>
	)
}
ProductForm.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onProductSubmit: PropTypes.func.isRequired,
	longMonthStrings: PropTypes.array,
}

ProductForm.defaultProps = {
	longMonthStrings: [],
}

export default ProductForm
