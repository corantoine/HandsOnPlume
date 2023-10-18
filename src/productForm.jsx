import {useState} from "react";
import PropTypes from "prop-types";

import useMonthStrings from "./useMonthStrings";
import {ComboBoxFormFragment, Form, NumberFormFragment, RadioGroupFormFragment, StringFormFragment} from "plume-react";

const ProductForm = ({id, className, onSubmit}) => {
    const {longMonthStrings} = useMonthStrings()
    const [product, setProduct] = useState({
        label: {
            fr: undefined
        },
        months: undefined,
        emoji: undefined,
        local: undefined,
        pef: undefined,
        CO2: undefined
    })

    return <Form id={id}
                 className={["product-form", className].filter(Boolean).join(' ')}
                 onSubmit={() => {
                     onSubmit(product)
                 }}>
        <StringFormFragment
            id="label"
            label="Nom du produit"
            value={product?.label?.fr}
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
                formatDescription="0,11"
                value={product?.pef}
                onValueChange={pef => setProduct({...product, pef})}/>
            <NumberFormFragment
                id="CO2"
                label="CO2"
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
    onSubmit: PropTypes.func
}

ProductForm.defaultProps = {
    className: undefined,
    onSubmit: () => undefined,
}

export default ProductForm