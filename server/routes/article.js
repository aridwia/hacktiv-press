const express = require('express');
router = express.Router();
const controllerArticles = require('../controllers/controllerArticles');
const authenticateUser = require('../helpers/authenticateUser');

router.get('/', controllerArticles.getallArticles)
router.post('/', authenticateUser.isLogin, controllerArticles.createArticle)
router.put('/:id', authenticateUser.isLogin, controllerArticles.updateArticle)
router.delete('/:id', authenticateUser.isLogin, controllerArticles.removeArticle)
router.get('/:id', controllerArticles.getoneArticle)

module.exports = router;
