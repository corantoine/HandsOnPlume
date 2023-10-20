import ProductCards from "./productCards.jsx"
import "./App.scss"
import initialProducts from "./assets/products.json"

import {useState} from "react"
import {Button} from "plume-react"


function App() {
    const products = initialProducts
    const [addMode, setAddMode] = useState(false)

    return <>
        <header>
            <h1>Est-ce bien la saison ?</h1>
        </header>
        <main>{addMode ? (<section>
                <h2>Ajouter un Produit</h2>
                <span>Intégrer ici un formulaire</span>
            </section>) : (<section>
                <h2>Liste des produits :</h2>
                <ProductCards products={products}/>
                <div className='products-actions'>
                    <Button
                        className='product-add-handler'
                        primary
                        onClick={() => setAddMode(true)}
                    >Ajouter un produit</Button>
                </div>
            </section>)}
        </main>
        <footer>
            <p>Conçu et construit avec tout l'amour du monde par l'équipe 🦚 avec l'aide
                de nos contributeurs des Coding Days 👨‍💻👨‍💻.
                <q>Cette application est fortement inspirée de <a
                    href="https://mesfruitsetlegumesdesaison.fr.">https://mesfruitsetlegumesdesaison.fr.</a></q>
            </p>
        </footer>
    </>
}

export default App
