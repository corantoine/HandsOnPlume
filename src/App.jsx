import ProductCards from "./productCards.jsx"
import "./App.scss"
import initialProducts from "./assets/products.json"

import {useState} from "react"
import {Button} from "plume-react"


function App() {
    const products = initialProducts
    const [addMode, setAddMode] = useState(false)

    return <>
    const [products, setProducts] = useState(initialProducts)
    const [addMode, setAddMode] = useState(false)

    return (<>
        <header>
            <h1>Est-ce bien la saison ?</h1>
        </header>
        <main>{addMode ? (<>
            <h2>Ajouter un Produit</h2>
            <span>Intégrer ici un formulaire</span>
        </>) : (<>
            <ProductCards products={products}/>
            <div className='products-actions'>
                <Button
                    className='product-add-handler'
                    primary
                    onClick={() => setAddMode(true)}
                >Ajouter un produit</Button>
        <main>{addMode ? <>
            <h2>Ajouter un Produit</h2>
            <ProductForm longMonthStrings={longMonthStrings}
                         setAddMode={setAddMode}
                         products={products}
                         setProducts={setProducts}
            /></> : <>
            <ProductCards className="products" products={products} narrowMonthStrings={narrowMonthStrings} longMonthStrings={longMonthStrings}/>
            <div className="products-actions">
                <Button className="product-add-handler" primary onClick={() => setAddMode(true)}>
                    Ajouter un produit
                </Button>
            </div>
        </>)}
        </>}
        </main>
        <footer>
            <div className='love-message'>
                Conçu et construit avec tout l&apos;amour du monde par l&apos;équipe
                🦚 avec l&apos;aide de nos contributeurs des Coding Days 👨‍💻👨‍💻.
            </div>
            <div className='source-message'>
                Cette application est fortement inspirée de
                <a href='https://mesfruitsetlegumesdesaison.fr.'>https://mesfruitsetlegumesdesaison.fr.</a>
            </div>
        </footer>
    </>
    </>)
}

export default App
