# Travaux pratique `Plume React`

Pour démarrer les travaux pratiques, clonez le projet `plume-react-vegetables-seasons` :

```terminal
git clone git@github.maif.io:commons/plume-react-vegetables-seasons.git
```

L'étape 0 initalise un projet ViteJS. Cette étape est de la configuration d'outils. Elle n'est pas obligatoire pour la suite des travaux.

Un temps d'échange de ⏱️ ~15/20min est prévu entre chaque étape pour présenter une solution et l'étape suivante.

## Étape 0, <small>⏱️ ~10min</small>

L’objectif de l'étape 0 est d’initialiser un projet React et la boîte à outils ViteJS.

￼![Capture d'écran de l'état final de l'étape 0](README.assets/step0-init-vite-project.png)

- [ ] Créez un projet avec vite.js.
  - https://vitejs.dev
  - https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- [ ] Initialisez le système de versioning Git pour pouvoir travailler sur plusieurs branches.
  - `git init`
  - `Git checkout -b step 0`
- [ ] Lancer l’application par défaut
  - `npm install`
  - `npm run dev`
  - Ouvrez votre navigateur à l’adresse http://localhost:5173/

> ℹ️ le port peut varier dans certains cas 😉.

> ℹ️ L'import du package `plume-react` dans le package.json est à réaliser dans l'étape 1, ici, il faut juste se concentrer sur l'initialisation d'un projet ViteJs React par défaut.

## Étape 1, <small>⏱️ _~35/40 min_</small>

L’objectif du Step 1 est d’initier une page d’accueil simple. Les composants Plume `Mediacard` et le _display_ `flex` seront de la partie.

![Capture d'écran de l'état final de l'étape 1](README.assets/step1-final-result.png)
￼

> ℹ️ Si vous avez sauté l'étape 0 ou si vous voulez partir sur une base saine, tirez la branche `step 0` :
>
> ```terminal
> git checkout -b step0 origin/step0
> ```

- [ ] Supprimez le code initié par ViteJS.

- [ ] Ajoutez les dépendances `plume-react` et `sass`.
  - Pensez à renommer le fichier `App.css` en `App.scss`.

> ℹ️ `npm install plume-react; npm install sass --save-dev;`

> en cas de soucis de configuration : `npm config set registry http://nexus-fabfonc.maif.local/repository/npm-public/``

- [ ] Initiez un layout de base avec une balise `header`, `main` et `footer`.
  - Ajouter un titre principal « Est-ce bien la saison ? »
  - Pour le footer, ajouter un message plein d’Amour

> ℹ️ Pour rappel la meilleure des sémantiques pour l’accessibilité est d’uiliser les balise HTML de base. Les attributs mai-aria sont à utiliser que lorsque nous sommes limités avec les balises HTML.

- [ ] Maintenant, passons aux choses sérieuses avec le conteneur principal `main`

  - Téléchargez et ajoutez dans votre projet le ficher products.json https://raw.github.maif.io/commons/plume-react-vegetables-seasons/step-1/src/assets/products.json?token=GHSAT0AAAAAAAAADLDMJFKEGJIZCNXPA7RQZJH73SA
  - Importez le fichier dans votre App.jsx et affecter ces produits à une constantes
  - Affichez le nom et l’emoji des produits en utilisant le composant MediaCard https://pages.github.maif.io/commons/plume-react/#/Layout/MediaCard

- [ ] Mettons un peu de peinture là dedans en utilisant le type d’affichage Flexbox : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- [ ] Importez le thème `@import "~plume-react/dist/style/theme-maif-dsi`;

> 🚨 Attention
>
> ```terminal
> [plugin:vite:css] [sass] Can't find stylesheet to import.
> ```
>
> Une petite config ViteJS nécessaire
>
> ```javascript
> import { defineConfig } from "vite"
> import react from "@vitejs/plugin-react"
> import { join } from "path"
>
> // https://vitejs.dev/config/
> export default defineConfig({
> 	plugins: [react()],
> 	resolve: {
> 		alias: [
> 			{
> 				find: /~(.+)/,
> 				replacement: join(globalThis.process.cwd(), "node_modules/$1"),
> 			},
> 		],
> 	},
> })
> ```

- [ ] Importez les fonts Plume

> 🚨 à compléter

### Pour aller plus loin…

- [ ] Jouez avec les variables provenant du thème plume, par exemple, à l’aide des mixin `clr(primary)`, `@include active()` ou `spc(m)`

> 🚨 à compléter

- [ ] Rendez votre page d’accueil responsive
  - Créez une map scss
    ```css
    $grid-breakpoints: (
    	xs: 0,
    	sm: 576px,
    	md: 768px,
    	lg: 992px,
    	xl: 1200px,
    	xxl: 1400px
    );
    ```
  - Jouez avec les _media rules_

> 🚨 à compléter

## Étape 2, <small>⏱️ _~35/40 min_</small>

L’objectif de l'étape 2 est d’améliorer le contenu de composant `MediaCard` : Javascript comme un expert, API Date et composant `Badge`.

￼![Capture d'écran de l'état final de l'étape 2](<README.assets/step2-final result.png>)

- [ ] Créez un tableau javascript ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
- [ ] Affichez les mois ou le produit est disponible, utilisez le composant `Badge`` : https://pages.github.maif.io/commons/plume-react/#/Badge/Badge
- [ ] Le produit est-il local ?
- [ ] Mise en avant kgCO2e/kg
- [ ] N’oubliez pas d’utiliser les variables et Mixin SCSS de Plume ;)
- [ ] Flex Flex Flex… wrap & space-between
- [ ] Pensez à utiliser le Nullish coalescing operator (??) lorsque l’infomation n’est pas présente dans votre DataSource https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

### Pour aller plus loin…

Le but est de générer le tableau de façon automatique et de profiter de l'internationnalisation de la fonction `toLocaleTimeString()` de l'API Date intégré directement au langage Javascript.

- [ ] Générez le tableau à l’aide de l’API Date de javascript :p
  - https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
  - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options (month style :p)

## Étape 3, <small>⏱️ _~40/45 min_</small>

L’objectif de l'étape 3 est d'intégrer 2 autres composants : `Tooltip` et `AnchorDialog`.

### Le composant Tooltip

https://pages.github.maif.io/commons/plume-react/#/Tooltips/Tooltip

Objectif : Ajouter un Tooltip dans le but d'afficher le mois complet.

![Capture d'écran Tooltip l'étape 3](README.assets/step3-final-result-tooltip.png)

### Le composant AnchorDialog

https://pages.github.maif.io/commons/plume-react/#/Dialogs/AnchorDialog

Objectif : Associer une AnchorDialog à un composant Button

![Capture d'écran AnchorDialog l'étape 3](README.assets/step3-final-result-anchordialog.png)

Ajouter un bouton (?) à droite du libellé Local et lui associer une AnchorDialog. Un clic sur ce bouton doit afficher l'AnchorDialog avec les caractéristiques suivantes :

- Titre : "Pourquoi consommer local ?"
- Contenu : "Se fournir chez les agriculteurs du territoire leur permet de soutenir une activité économique
  locale, de réduire les transports et les pertes, ainsi que de mieux connaître la qualité et
  l’origine des produits. Quand on consomme des aliments qui viennent de loin, il ne faut pas oublier
  que ces produits ont du faire un long voyage pour arriver jusque notre assiette. L’avion est le mode
  de transport le plus consommateur d’énergie et émetteur de gaz à effet de serre, suivi par le
  transport terrestre et le bateau."
- La croix sur l'entête de l'AnchorDialog doit permettre la fermeture de celle-ci.

### Pour aller plus loin…

![Capture d'écran AnchorDialog l'étape 3](README.assets/step3-final-result-anchordialog-2.png)

Ajouter un bouton (?) à droite du libellé **kgCO2e/kg** et lui associer une `AnchorDialog`. Un clic sur ce bouton doit afficher l'`AnchorDialog` avec les caractéristiques suivantes :

- **Titre** : L'équivalent CO2 (CO2e)
- **Contenu** :
  Se fournir chez les agriculteurs du territoire leur permet de soutenir une activité économique
  locale, de réduire les transports et les pertes, ainsi que de mieux connaître la qualité et
  l’origine des produits. Quand on consomme des aliments qui viennent de loin, il ne faut pas oublier
  que ces produits ont du faire un long voyage pour arriver jusque notre assiette. L’avion est le mode
  de transport le plus consommateur d’énergie et émetteur de gaz à effet de serre, suivi par le
  transport terrestre et le bateau. Si vous souhaitez aller plus loin dans votre démarche, vous pouvez comparer différents moyens de transport grace à notre simulateur <a href="https://impactco2.fr/transport" target="_blank"                      rel="noreferrer">mon impact transport</a>.

- La croix sur l'entête de l'`AnchorDialog` doit permettre la fermeture de celle-ci.
