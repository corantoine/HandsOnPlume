import "./App.scss";
import initialProducts from "./assets/products.json";
import { MediaCard } from "plume-react";

function App() {
  const products = initialProducts;
  return (
    <>
      <header>
        <h1>Est-ce bien la saison ?</h1>
      </header>
      <main className="product-container">
        {/* <section> */}
          {/* <div> */}
            {products.map((product) => (
            <MediaCard
              className="mediacard"
              key={product.label.fr}
              title={product.label.fr}
              media={product.emoji}
            ></MediaCard>
            // <MediaCard key={`products-${i}`}
            // className="product"
          ))}
          {/* </div> */}
        {/* </section> */}
      </main>
      <footer> Message plein d'amour </footer>
    </>
  );
}

export default App;
