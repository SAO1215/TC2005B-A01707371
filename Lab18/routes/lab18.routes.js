const express = require('express');
const router = express.Router();
const isAuth = require('../controllers/is-auth.js');

const path = require('path');
router.get('/lab1', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab1.html'));
});

const gustosController = require('../controllers/misgustos_controller');

router.get('/', isAuth, gustosController.listar);

router.get('/comida', isAuth, gustosController.get_comida);

router.post('/comida', isAuth, gustosController.post_comida);

router.get('/bandas', isAuth, gustosController.get_bandas);

router.post('/bandas', isAuth, gustosController.post_bandas);

router.get('/hobbies', isAuth, gustosController.get_hobbies);

router.post('/hobbies', isAuth, gustosController.post_hobbies);


module.exports = router;