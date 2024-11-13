import "./App.scss";
import initialProducts from "./assets/products.json";

import { BadgeStatus, MediaCard } from "plume-react";
import { Badge } from "plume-react";

function App() {
  const products = initialProducts;

  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
// const months = 

  return (
    <>
      <header>
        <h1>Est-ce bien la saison ?</h1>
      </header>
      <main>
        <section>
          <h2>Liste des produits :</h2>
          <div className="products">
            {products.map((product, i) => (
              <MediaCard
                key={`products-${i}`}
                className="products"
                media={[product.label.fr, product.emoji]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="badge">
                  {months.map((month, j) => (
                    <Badge
                      key={`months-${j}`}
                      className="month"
                      status={
                        product.months.includes(j)
                          ? BadgeStatus.success
                          : BadgeStatus.inactive
                      }
                    >
                      {month}
                    </Badge>
                  ))}
                </div>
                <section className="info-product">
                  <div className="local">
                    {product.local ? "🇫🇷 local" : "✈️ non local"}
                  </div>
                  <div className="co2"></div>
                  <strong>{product.CO2}</strong>kgCO2e/kg{" "}
                </section>
              </MediaCard>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>
          Conçu et construit avec tout l'amour du monde par l'équipe 🦚 avec
          l'aide de nos contributeurs des Coding Days 👨‍💻👨‍💻.
          <q>
            Cette application est fortement inspirée de{" "}
            <a href="https://mesfruitsetlegumesdesaison.fr.">
              https://mesfruitsetlegumesdesaison.fr.
            </a>
          </q>
        </p>
      </footer>
    </>
  );
}

export default App;
