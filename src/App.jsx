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

        </>
    )
}

export default App
