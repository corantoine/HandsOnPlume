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

>ℹ️ le port peut varier dans certains cas 😉.

>ℹ️ L'import du package `plume-react` dans le package.json est à réaliser dans l'étape 1, ici, il faut juste se concentrer sur l'initialisation d'un projet ViteJs React par défaut.








## Étape 1, <small>⏱️ _~35/40 min_</small>

L’objectif du Step 1 est d’initier une page d’accueil simple. Les composants Plume `Mediacard` et le _display_ `flex` seront de la partie.

![Capture d'écran de l'état final de l'étape 1](README.assets/step1-final-result.png)
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

- [ ] Importez les fonts Plume

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







## Étape 2, <small>⏱️ _~35/40 min_</small>


L’objectif de l'étape 2 est d’améliorer le contenu de composant `MediaCard` : Javascript comme un expert, API Date et composant `Badge`.

￼![Capture d'écran de l'état final de l'étape 2](<README.assets/step2-final-result.png>)

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











## Étape 5, <small>⏱️ _~?min_</small>

L'intégration d'un formulaire s'accompagne toujours d'une validation. C'est ce que nous allons faire dans cette étape 5 à l'aide du hook `useValidatedState`

￼![Capture d'écran de l'état final de l'étape 5](<README.assets/step5-final-result.png>)


>ℹ️ Le fait d'utiliser un hook de validation à plusieurs avantages : 
>
>- Simplifier la mise en place de validation sur un state complexe
>- Découpler la validation métier de la partie comportement/scripting HTML
>- Déclencher la validation à n'importe quel endroit dans la vie du composant
> 


- [ ] importez le hook `useValidatedState` et remplacez le hook `useState` par celui-ci

>ℹ️ En plus de retourner le `state` et la méthode `setState` classiques, le hook retourne un objet `errors` et une callback de validation `validate`.
>
>L'objet `errors` est l'image de l'object `state` mais chaque valeur de clé peut retourner un message (ie chaîne de caractères). Ce dernier est construit à chaque fois que la méthode `validate` est déclenché.
>
>La méthode `validate` prend en paramètre un objet de callback. Cet objet de callback doit être à l'image de l'objet `state`. La méthode `validate` retourne un objet de type : 
>```javascript
>{
>    errors,
>    isFailure: () => isDefined(errors),
>    isSuccess: () => nonDefined(errors),
>    throwErrorIfFail: message => {
>        if (isDefined(errors)) {
>            throw new Error(message);
>        }
>    }
>}
>``````


>ℹ️ Par exemple, prenons le `state` suivant : 
>```javascript
>{
>   societaire: {
>       prenom: undefined
>       age: 42
>   }
>}
>```
>
>l'appel de la méthode `validate` serai : 
>```javascript
>validate({
>   societaire: {
>       prenom: (it) => {
>            if ([undefined, null].includes(it.prenom)) return `Le prénom du produit est obligatoire.`;
>        }
>   }
>})
>```
>retournera le speudo objet suivant :
>```javascript
>{
>    errors: {
>        societaire: {
>            prenom: `Le prénom du produit est obligatoire.`
>        }
>    },
>    isFailure: () => true,
>    isSuccess: () => false,
>    throwErrorIfFail: (message) => throw new Error(message)
>}
>```

>ℹ️ Pour information, le message levée par la méthode `throwErrorIfFail` est capturée par les composant `Form` de Plume et interprétée comme un message général.


- [ ] Ajoutez la notion de `mandatory`sur les fragments du formulaires suivant :
    - Nom du produit
    - Mois de production
    - PEF
    - CO2

- [ ] Déclenchez une validation à la soumission du formulaire avec les règles suivantes :
    - Le nom du produit est obligatoire.
    - Au moins un mois doit être sélectionné.
    - L'indicateur PEF est obligatoire.
    - Il est impossible d'avoir un indicateur PEF si faible avec un taux kgCO2e/kg si élevé.
    - L'indicateur CO2 est obligatoire.
    - L'indicateur CO2 ne peut pas être négatif.
    - CO2

- [ ] N'oubliez pas de transmettre vos messages d'erreur aux différents fragments du formulaire.


### Pour aller plus loin…

- [ ] Tranformez votre composant Plume `Form` par un `NumberedWizardForm` et déclenchez certaines validations au changement d'étapes `onBeforeNextStepChange` 😎.

