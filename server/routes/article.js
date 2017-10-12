const express = require('express');
router = express.Router();
const controllerArticles = require('../controllers/controllerArticles');

router.get('/', controllerArticles.getallArticles)
router.post('/', controllerArticles.createArticle)
router.put('/:id', controllerArticles.updateArticle)
router.delete('/:id', controllerArticles.removeArticle)
router.get('/:id', controllerArticles.getoneArticle)

module.exports = router;
