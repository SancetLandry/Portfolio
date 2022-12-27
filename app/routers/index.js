const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');

/**
 * @route GET / affiche la page d'accueil
 */
router.get('/', mainController.homePage);

/**
 * 404
 */
router.use((req, res) => {
    res.status(404).render('404');
});

module.exports = router;
