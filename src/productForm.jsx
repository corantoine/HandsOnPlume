import PropTypes from "prop-types";

import useMonthStrings from "./useMonthStrings";
import {ComboBoxFormFragment, Form, NumberFormFragment, RadioGroupFormFragment, StringFormFragment, useValidatedState} from "plume-react";


const emptyProduct = {
    label: {
        fr: undefined
    },
    months: undefined,
    emoji: undefined,
    local: undefined,
    pef: undefined,
    CO2: undefined
};
const ProductForm = ({id, className, onSubmit, onCancel}) => {
    const {longMonthStrings} = useMonthStrings()
    const {state: product, setState: setProduct, errors, validate} = useValidatedState(emptyProduct)

    return <Form id={id}
                 className={["product-form", className].filter(Boolean).join(' ')}
                 onCancel={() => {
                     setProduct(emptyProduct)
                     onCancel();
                 }}
                 onSubmit={() => {
                     const validationRules = validate({
                        label: { 
                            fr:(it) =>{
                                if([undefined, null].includes(it.fr))
                                    return "Le nom du produit est obligatoire"
                            }
                        }
                     })
                     validationRules.throwErrorIfFail();
                     onSubmit(product)
                 }}>
        <StringFormFragment
            id="label"
            label="Nom du produit"
            mandatory
            value={product?.label?.fr}
            error={errors?.label?.fr}
            onValueChange={label => setProduct({...product, label: {fr: label}})}
        />
        <StringFormFragment
            id="emoji"
            label="Emoji"
            value={product?.emoji}
            hint={<span>Pour plus de <b>fun</b>, ajouter un emoji 🍋🍇🌶️🧅!</span>}
            onValueChange={emoji => setProduct({...product, emoji})}
        />
        <ComboBoxFormFragment
            id="months"
            label="Mois de production"
            options={longMonthStrings.map((month, i) => ({
                label: month,
                value: i,
                icon: ((m) => {
                    switch (m) {
                        case 0:
                        case 1:
                        case 2:
                            return '☃️'
                        case 3:
                        case 4:
                        case 5:
                            return '🌿'
                        case 6:
                        case 7:
                        case 8:
                            return '☀️'
                        default:
                            return '🍂'
                    }
                })(i)
            }))}
            value={product?.months}
            mandatory
            onValueChange={months => setProduct({...product, months})}
            renderOption={({label, icon}) => `${icon} ${label}`}
            multiple
        />
        <RadioGroupFormFragment
            id="local"
            label="Est-ce un produit local ?"
            options={[
                {value: 'true', label: '🇫🇷 Local'},
                {value: 'false', label: '✈️ Non local'}
            ]}
            value={product?.local ? 'true' : 'false'}
            onValueChange={local => setProduct({...product, local: local === 'true'})}
            inlined
        />
        <div className="product-form-numbers-fragments">
            <NumberFormFragment
                id="pef"
                label="PEF"
                mandatory
                formatDescription="0,11"
                value={product?.pef}
                onValueChange={pef => setProduct({...product, pef})}/>
            <NumberFormFragment
                id="CO2"
                label="CO2"
                mandatory
                formatDescription="1,76 kgCO2e/kg"
                unit="kgCO2e/kg"
                value={product?.CO2}
                onValueChange={CO2 => setProduct({...product, CO2})}/>
        </div>
    </Form>
}
ProductForm.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
}

ProductForm.defaultProps = {
    className: undefined,
    onSubmit: () => undefined,
    onCancel: () => undefined,
}

export default ProductForm