# Travaux pratique `Plume React`


Pour démarrer les travaux pratiques, clonez le projet `plume-react-vegetables-seasons` :
```terminal
git clone git@github.maif.io:commons/plume-react-vegetables-seasons.git
```

L'étape 0 initalise un projet ViteJS. Cette étape est de la configuration d'outils. Elle n'est pas obligatoire pour la suite des travaux.






## Étape 0, <small>⏱️ ~10min</small>

L’objectif de l'étape 0 est d’initialiser un projet React et la boîte à outils ViteJS.

￼![Step 0, capture d'écran d'un projet vite initial](README.assets/step0-init-vite-project.png)

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

>ℹ️ le port peut varier dans certains cas 😉.

>ℹ️ L'import du package `plume-react` dans le package.json est à réaliser dans l'étape 1, ici, il faut juste se concentrer sur l'initialisation d'un projet ViteJs React par défaut.






## Étape 1, <small>⏱️ _~30/40 min_</small>

L’objectif du Step 1 est d’initier une page d’accueil simple. Les composants Plume `Mediacard` et le _display_ `flex` seront de la partie.

![Alt text](README.assets/step1-final-result.png)
￼
>ℹ️ Si vous avez sauté l'étape 0 ou si vous voulez partir sur une base saine, tirez la branche `step 0` :
>```terminal
>git checkout -b step0 origin/step0
>```

- [ ] Supprimez le code initié par ViteJS.

- [ ] Ajoutez les dépendances `plume-react` et `sass`.
    - Pensez à renommer le fichier `App.css` en `App.scss`. 

>ℹ️ `npm install plume-react; npm install sass --save-dev;`

>en cas de soucis de configuration : `npm config set registry http://nexus-fabfonc.maif.local/repository/npm-public/``


- [ ] Initiez un layout de base avec une balise `header`, `main` et `footer`. 
    - Ajouter un titre principal « Est-ce bien la saison ? »
    - Pour le footer, ajouter un  message plein d’Amour

>ℹ️ Pour rappel la meilleure des sémantiques pour l’accessibilité est d’uiliser les balise HTML de base. Les attributs mai-aria sont à utiliser que lorsque nous sommes limités avec les balises HTML.



- [ ] Maintenant, passons aux choses sérieuses avec le conteneur principal `main`
    - Téléchargez et ajoutez dans votre projet le ficher products.json  https://raw.github.maif.io/commons/plume-react-vegetables-seasons/step-1/src/assets/products.json?token=GHSAT0AAAAAAAAADLDMJFKEGJIZCNXPA7RQZJH73SA
    - Importez le fichier dans votre App.jsx et affecter ces produits à une constantes
    - Affichez le nom et l’emoji des produits en utilisant le composant MediaCard https://pages.github.maif.io/commons/plume-react/#/Layout/MediaCard

- [ ] Mettons un peu de peinture là dedans en utilisant le type d’affichage Flexbox : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- [ ] Importez le thème  `@import "~plume-react/dist/style/theme-maif-dsi`;

>🚨 Attention
>```terminal
>[plugin:vite:css] [sass] Can't find stylesheet to import.
>````
>Une petite config ViteJS nécessaire
>```javascript
>import {defineConfig} from 'vite'
>import react from '@vitejs/plugin-react'
>import {join} from "path";
>
>
>
>// https://vitejs.dev/config/
>export default defineConfig({
>    plugins: [react()],
>    resolve: {
>        alias: [
>            {
>                find: /~(.+)/,
>                replacement: join(globalThis.process.cwd(), "node_modules/$1"),
>            },
>        ],
>    },
>})
>````

- [ ] Importer les fonts Plume

>🚨 à compléter 

### Pour aller plus loin…

- [ ] Jouez avec les variables provenant du thème plume, par exemple, à l’aide des mixin `clr(primary)`, `@include active()` ou `spc(m)`

>🚨 à compléter 

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
        ``````
    - Jouez avec les _media rules_

>🚨 à compléter 





