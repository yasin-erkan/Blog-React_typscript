# Health Blog Application / Application Blog Santé

This project is a Health Blog application built with React and TypeScript. It fetches data from the JSONPlaceholder API to display a list of blog posts, allows users to search posts by title and filter by author, and implements an infinite scrolling feature to load more content as the user scrolls.

Ce projet est une application de Blog Santé construite avec React et TypeScript. Il récupère des données de l'API JSONPlaceholder pour afficher une liste d'articles de blog, permet aux utilisateurs de rechercher des articles par titre et de filtrer par auteur, et implémente une fonctionnalité de défilement infini pour charger plus de contenu à mesure que l'utilisateur fait défiler la page.

## Technologies Used / Technologies Utilisées

- **React:** A JavaScript library for building user interfaces. / Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **TypeScript:** A superset of JavaScript that adds static typing. / Un sur-ensemble de JavaScript qui ajoute le typage statique.
- **Tailwind CSS:** A utility-first CSS framework for styling. / Un framework CSS "utility-first" pour le stylage.
- **@tanstack/react-query:** A powerful asynchronous data fetching, caching, synchronization and updating library for React. / Une librairie puissante pour la récupération, la mise en cache, la synchronisation et la mise à jour de données asynchrones dans React.
- **react-router-dom:** For routing if the application were to expand to multiple pages (though currently a single-page application focusing on the home view). / Pour la navigation si l'application devait s'étendre à plusieurs pages (bien qu'actuellement une application monopage axée sur la vue d'accueil).

## Features / Fonctionnalités

- Display a list of posts. / Affichage d'une liste d'articles.
- Search posts by title and body. / Recherche d'articles par titre et corps.
- Filter by author. / Filtrage par auteur.
- Infinite scrolling to load more posts. / Défilement infini pour charger plus d'articles.
- Loading indicators. / Indicateurs de chargement.
- Error handling. / Gestion des erreurs.

## Getting Started / Démarrage

To run this project locally: / Pour exécuter ce projet localement :

2.  **Install dependencies:**

    ```bash
    npm install
    # or / ou
    yarn install
    ```

    **Installer les dépendances :**

    ```bash
    npm install
    # ou / ou
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    # or / ou
    yarn start
    ```

    **Démarrer le serveur de développement :**

    ```bash
    npm start
    # ou / ou
    yarn start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser. / Ouvrez [http://localhost:3000](http://localhost:3000) pour la visualiser dans votre navigateur.

## Project Structure / Structure du Projet

├── public/
├── src/
│ ├── components/ # Reusable UI components / Composants UI réutilisables
│ ├── services/ # API interaction logic / Logique d'interaction avec l'API
│ ├── types/ # TypeScript type definitions / Définitions de types TypeScript
│ ├── App.tsx # Main application component / Composant principal de l'application
│ ├── index.tsx # Entry point of the application / Point d'entrée de l'application
│ ├── ... other files ... / ... autres fichiers ...
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── ... other configuration files ... / ... autres fichiers de configuration ...
