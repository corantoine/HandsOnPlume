import {useRef, useState} from "react"
import PropTypes from "prop-types"
import "./App.scss"

import {AnchorDialog, Badge, BadgeStatus, Button, MediaCard, Tooltip, TooltipVariant,} from "plume-react"
import useMonthStrings from "./useMonthStrings.js";

//A chaque fois qu'on va créer un badge, il va créer la ref dont il a besoin
const TooltifiedBadge = ({id, label, status, tooltipContent}) => {
    const badgeRef = useRef(undefined)
    return (<>
        <Badge ref={badgeRef} status={status}>
            {label}
        </Badge>
        <Tooltip
            id={`${id}-tooltip`}
            refElement={badgeRef}
            content={tooltipContent}
            variant={TooltipVariant.DARK}
        />
    </>)
}
TooltifiedBadge.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.keys(BadgeStatus)),
    tooltipContent: PropTypes.string.isRequired,
}

const ProductCards = ({products}) => {
    const {narrowMonthStrings, longMonthStrings} = useMonthStrings()
    const [localInterrogation, setLocalInterrogation] = useState(false)
    const [co2Interrogation, setCO2Interrogation] = useState(false)

    return <div className='products'>{products.map((product, i) =>
        <MediaCard key={`product-${i}`}
                   className='product'
                   media={[product.label.fr, product.emoji].filter(Boolean).join(" ")}>
            <div className='product-availability-months'>{narrowMonthStrings.map((month, j) =>
                <TooltifiedBadge key={`product-${i}-availability-months-${j}`}
                                 id={`product-${i}-availability-months-${j}`}
                                 label={month}
                                 tooltipContent={longMonthStrings[j]}
                                 status={product.months.includes(j) ? BadgeStatus.success : BadgeStatus.inactive}/>)}
            </div>
            <div className='product-some-numbers'>
                <div className='product-some-numbers--local'>
                    {product.local ? "🇫🇷 Local" : "✈️ Non local"}
                    <Button className='local-interrogation-handler' small
                            onClick={() => setLocalInterrogation(true)}>?</Button>
                </div>
                <div className='product-some-numbers--co2'>
                    <span className='product-some-numbers--highlighting'>{product.CO2 ?? "?"}</span>&nbsp;kgCO2e/kg
                    <Button className='co2-interrogation-handler' small
                            onClick={() => setCO2Interrogation(true)}>?</Button>
                </div>
            </div>
        </MediaCard>)}
        <AnchorDialog title='Pourquoi consommer local ?'
                      isOpen={localInterrogation}
                      onClose={() => setLocalInterrogation(false)}
                      style={{width: "30rem"}}>
            <p>
                Se fournir chez les agriculteurs du territoire leur permet de soutenir
                une activité économique locale, de réduire les transports et les
                pertes, ainsi que de mieux connaître la qualité et l’origine des
                produits. Quand on consomme des aliments qui viennent de loin, il ne
                faut pas oublier que ces produits ont du faire un long voyage pour
                arriver jusque notre assiette. L’avion est le mode de transport le
                plus consommateur d’énergie et émetteur de gaz à effet de serre, suivi
                par le transport terrestre et le bateau.
            </p>
            <p>
                Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
                comparer différents moyens de transport grace à notre simulateur
                <a href='https://impactco2.fr/transport' target='_blank' rel='noreferrer'>mon impact transport</a>.
            </p>
        </AnchorDialog>
        <AnchorDialog title="L'équivalent CO2 (CO2e)"
                      isOpen={co2Interrogation}
                      onClose={() => setCO2Interrogation(false)}
                      style={{width: "30rem"}}>
            <p>
                Le dérèglement climatique actuel est une conséquence de nos émissions
                importantes de gaz à effet de serre. Nous avons la chance de pouvoir
                mesurer ces émissions avec un indice simple : les kilogrammes
                d&apos;équivalent CO2 (kgCO2e).
            </p>
            <p>
                Par exemple, 1 kg de méthane équivaut à 28 kg de CO2. Si la
                fabrication d&apos;un produit a émis 1 kg de méthane et 1 kg de CO2,
                alors l&apos;impact total de ce produit est de 29 kg d&apos;équivalent
                CO2.
            </p>
            <p>
                Pour voir plus d&apos;équivalents, vous pouvez utiliser
                <a href='https://impactco2.fr/' target='_blank' rel='noreferrer'>notre convertisseur CO2</a>
            </p>
        </AnchorDialog>
    </div>
}
ProductCards.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.shape({
            fr: PropTypes.string.isRequired,
        }),
        months: PropTypes.arrayOf(PropTypes.number).isRequired,
        emoji: PropTypes.string.isRequired,
        local: PropTypes.bool,
        pef: PropTypes.number,
        CO2: PropTypes.number,
    })).isRequired
}
ProductCards.defaultProps = {
    narrowMonthStrings: [], longMonthStrings: [],
}

export default ProductCards
