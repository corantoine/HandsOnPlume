import { useState } from 'react'
import './App.scss'

import initialProducts from './assets/products.json'
import {
	Button,
	A11yRegion,
	NotificationStack,
	NotificationLevel,
	useNotify,
} from 'plume-react'
import ProductForm from './productForm'
import ProductCards from './productCards'

function App() {
	const notifications = useNotify()
	const [products, setProducts] = useState(initialProducts)
	const [addMode, setAddMode] = useState(false)

	return (
		<>
			<header>
				<h1>Est-ce bien la saison ?</h1>
			</header>
			<main>
				<A11yRegion />
				<NotificationStack />
				{addMode ? (
					<section>
						<h2>Ajouter un Produit</h2>
						<ProductForm
							id='product-form-0'
							onSubmit={(product) => {
								setProducts([...products, product])
								setAddMode(false)
								notifications.push({
									timeout: 5000,
									type: NotificationLevel.SUCCESS,
									component: `Le produit ${product.label.fr} a été créé !`,
								})
							}}
							onCancel={() => {
								setAddMode(false)
							}}
						/>
					</section>
				) : (
					<section>
						<h2>Liste des produits :</h2>
						<div className='products-actions'>
							<Button
								className='product-add-handler'
								primary
								onClick={() => setAddMode(true)}
							>
								Ajouter un produit
							</Button>
						</div>
						<ProductCards className='products' products={products} />
					</section>
				)}
			</main>
			<footer>
				<p>
					Conçu et construit avec tout l'amour du monde par l'équipe 🦚 avec
					l'aide de nos contributeurs des Coding Days 👨‍💻👨‍💻.
					<q>
						Cette application est fortement inspirée de{' '}
						<a href='https://mesfruitsetlegumesdesaison.fr.'>
							https://mesfruitsetlegumesdesaison.fr.
						</a>
					</q>
				</p>
			</footer>
		</>
	)
}

export default App
