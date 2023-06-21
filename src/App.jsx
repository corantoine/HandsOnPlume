import './App.scss'
import initialProducts from './assets/products.json'

import {MediaCard} from "plume-react";

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
                               media={[product.label.fr, product.emoji].filter(Boolean).join(' ')}/>)}
                </div>
            </main>
            <footer>
                <div className="love-message">Conçu et construit avec tout l'amour du monde par l'équipe 🦚 avec l'aide
                    de
                    nos contributeurs des Coding Days 👨‍💻👨‍💻.
                </div>
                <div className="source-message">Cette application est fortement inspirée de <a
                    href="https://mesfruitsetlegumesdesaison.fr.">https://mesfruitsetlegumesdesaison.fr.</a></div>
            </footer>
        </>
    )
}

export default App
