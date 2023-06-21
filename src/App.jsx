import './App.scss'
import initialProducts from './assets/products.json'

import {Badge, BadgeStatus, MediaCard} from "plume-react";

const birthday = new Date(0)
// ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const months = (style = 'long') =>
    [...Array(12).keys()].map(i => {
        const date = new Date(birthday)
        date.setMonth(i)
        return date.toLocaleDateString('fr-FR', {month: style})
    })

function App() {
    const products = initialProducts

    return (
        <>
            <header>
                <h1>Est-ce bien la saison ?</h1>
            </header>
            <main>
                <div className="products">{products.map((product, i) =>
                    <MediaCard key={`products-${i}`}
                               className="products"
                               media={[product.label.fr, product.emoji].filter(Boolean).join(' ')}
                               description={<>
                                   <div className="product-availability-months">{months('narrow').map((month, j) =>
                                       <Badge key={`product-${i}-availability-months-${j}`}
                                              status={product.months.includes(j) ? BadgeStatus.success : BadgeStatus.inactive}>
                                           {month}
                                       </Badge>)}
                                   </div>
                                   <div className="product-some-numbers">
                                       <div className="product-some-numbers--local">
                                           {product.local ? '🇫🇷 Local' : '✈️ Non local'}
                                       </div>
                                       <div className="product-some-numbers--local">
                                           <b>{product.CO2 ?? "?"}</b> kgCO2e/kg
                                       </div>
                                   </div>
                               </>
                               }/>)}
                </div>
            </main>

        </>
    )
}

export default App
