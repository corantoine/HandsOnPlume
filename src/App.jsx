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
                <section>
                    <h2>Liste des produits :</h2>
                    <div className="products">{products.map((product, i) =>
                        <MediaCard key={`products-${i}`}
                                   className="products"
                                   media={[product.label.fr, product.emoji].filter(Boolean).join(' ')}/>)}
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
