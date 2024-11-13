import {  ComboBoxFormFragment, Form, NumberFormFragment, RadioGroupFormFragment, StringFormFragment } from 'plume-react'
import { useState } from 'react';
import useMonthStrings from './useMonthStrings';
   
const emptyProduct = {
        label: {
      fr: undefined
    },
    months: undefined,
    emoji: undefined,
    local: undefined,
    pef: undefined,
    CO2: undefined
}

const AddProductForm = ({id, className, onSubmit, onCancel}) => {
    const {longMonthStrings} = useMonthStrings();
    const [product, setProduct] = useState(emptyProduct);

    return (
            <Form
            className={["product-form", className].filter(Boolean).join(' ')}
            id="adding-products"
            onCancel={() => alert("Création du produit annulée")}
            onSubmit={() => {
                onSubmit(product)
            }}
            >
                <StringFormFragment 
                id="label"
                label="Nom du produit"
                mandatory
                value={product?.label?.fr}
                // error={errors.label?.fr}
                onValueChange={label => setProduct({...product, label: {fr:label}})}
                />
                <StringFormFragment
                id="emoji"
                label="Emoji"
                value={product?.emoji}
                hint={<span>Pour plus de <b>fun</b>, ajoutez un emoji 🍋🍇🌶️🧅 !</span>}
                onValueChange={emoji => setProduct({...product, emoji})}
                />
                <ComboBoxFormFragment
                id="months"
                multiple
                label="Mois de production"
                options={longMonthStrings.map((month, i) =>({
                    label: month,
                    value: i
                }))}
                value={product?.months}
                onValueChange={month => setProduct({...product, month})}
                />
                <div className='radio-button'>
                <RadioGroupFormFragment
                id="local"
                label= "Est-ce un produit local ?"
                options={[
                    {
                    value: 0,
                    label: "🇫🇷 Local",
                    },
                    {
                    value: 1,
                    label: "✈️ Non local"
                    }
                ]}
                value={product?.local}
                onValueChange={local => setProduct({...product, local})}
                />
                </div>
                <div className='number-form-fragment'>
                    <NumberFormFragment
                id="pef"
                formatDescription="0,11"
                label="PEF"
                value={product?.pef}
                onValueChange={pef => setProduct({...product, pef})}
                />
                <NumberFormFragment
                id="CO2"
                formatDescription="1,76kgCO2e/kg"
                unit="kgCP2e/kg"
                label="CO2"
                value={product?.CO2}
                onValueChange={CO2 => setProduct({...product, CO2})}
                />
                </div>
                </Form>         
    );
};

export default AddProductForm;