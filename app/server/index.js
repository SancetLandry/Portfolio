const express = require('express');
const app = express();
/**
 * Une version courte, une version longue pour les variables d'environnement
 * On ajoute les variables déifini dans le fichier .env à nos variables d'environnement
 */
const dotenv = require('dotenv');
/**
 * Par défaut, ce module va chercher un fichier .env situé à la racine de l'application
 */
dotenv.config();

// require('dotenv').config();

const router = require('../routers');

/**
 * tu utiliseras ejs
 */
app.set('view engine', 'ejs');
/**
 * va chercher les views dans le dossier views
 * Considère que tu es exécuté dans le fichier racine index.js
 */
app.set('views', './app/views');

/**
 * Tous les fichiers statics sont dans le répertoire public
 * ? static :
 */
app.use(express.static('public'));

app.use(router);

// const port = process.env.PORT;
// const base_url = process.env.BASE_URL;

// app.listen(port, () => {
//     console.log(`Listening on ${base_url}:${port}`);
// });

app.set('port', process.env.PORT);
app.set('base_url', process.env.BASE_URL);

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('base_url')}:${app.get('port')}`);
});
