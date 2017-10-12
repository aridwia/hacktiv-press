var express = require('express');
var router = express.Router();
const controllerUser = require('../controllers/controllerUser');
const authenticateUser = require('../helpers/authenticateUser');

/* GET users listing. */
router.get('/', authenticateUser.isLogin, controllerUser.getallUser)
router.post('/', controllerUser.createUser)
router.put('/:id', controllerUser.updateUser)
router.delete('/:id', controllerUser.removeUser)
router.post('/signIn', controllerUser.signIn)

module.exports = router;
