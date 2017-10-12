var express = require('express');
var router = express.Router();
const controllerUser = require('../controllers/controllerUser');

/* GET users listing. */
router.get('/', controllerUser.getallUser)
router.post('/', controllerUser.createUser)
router.put('/:id', controllerUser.updateUser)
router.delete('/:id', controllerUser.removeUser)

module.exports = router;
