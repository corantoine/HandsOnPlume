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
                <section>
                    <h2>Liste des produits :</h2>
                    <div className="products">{products.map((product, i) =>
                        <MediaCard key={`product-${i}`}
                                   className="product"
                                   media={[product.label.fr, product.emoji].filter(Boolean).join(' ')}>
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
                                    <span className="product-some-numbers--highlighting">{product.CO2 ?? "?"}</span> kgCO2e/kg
                                </div>
                            </div>
                        </MediaCard>)}
                    </div>
                </section>
            </main>
            <footer>
                <p>Conçu et construit avec tout l'amour du monde par l'équipe 🦚 avec l'aide
                    de nos contributeurs des Coding Days 👨‍💻👨‍💻.
                <q>Cette application est fortement inspirée de <a
                    href="https://mesfruitsetlegumesdesaison.fr.">https://mesfruitsetlegumesdesaison.fr.</a></q>
                </p>
            </footer>
        </>
    )
}

export default App
