import {useState} from "react";
import './App.scss'

import initialProducts from './assets/products.json'
import {Button} from "plume-react";
import ProductCards from "./productCards.jsx";
import ProductForm from "./productForm.jsx";


const birthday = new Date(0)
// ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const months = (style = 'long') => [...Array(12).keys()].map(i => {
    const date = new Date(birthday)
    date.setMonth(i)
    return date.toLocaleDateString('fr-FR', {month: style})
})
const narrowMonthStrings = months('narrow')
const longMonthStrings = months('long')




function App() {
    const [products, setProducts] = useState(initialProducts)
    const [addMode, setAddMode] = useState(false)

    return (<>
        <header>
            <h1>Est-ce bien la saison ?</h1>
        </header>
        <main>{addMode ? <>
            <h2>Ajouter un Produit</h2>
            <ProductForm longMonthStrings={longMonthStrings}
                         onCancel={() => setAddMode(false)}
                         onProductSubmit={product => {
                             setProducts([...products, product])
                             setAddMode(false)
                         }}/></> : <>
            <ProductCards className="products" products={products} narrowMonthStrings={narrowMonthStrings} longMonthStrings={longMonthStrings}/>
            <div className="products-actions">
                <Button className="product-add-handler" primary onClick={() => setAddMode(true)}>
                    Ajouter un produit
                </Button>
            </div>
        </>}
        </main>
        <footer>
            <div className="love-message">Conçu et construit avec tout l&apos;amour du monde par l&apos;équipe 🦚
                avec l&apos;aide de nos contributeurs des Coding Days 👨‍💻👨‍💻.
            </div>
            <div className="source-message">Cette application est fortement inspirée de <a
                href="https://mesfruitsetlegumesdesaison.fr.">https://mesfruitsetlegumesdesaison.fr.</a></div>
        </footer>
    </>)
}

export default App
