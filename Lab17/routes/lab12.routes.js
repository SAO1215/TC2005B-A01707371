const express = require('express');

const router = express.Router();

const path = require('path');
router.get('/lab1', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab1.html'));
});

const gustosController = require('../controllers/misgustos_controller');

router.get('/', gustosController.listar);

router.get('/comida', gustosController.get_comida);

router.post('/comida', gustosController.post_comida);

router.get('/bandas', gustosController.get_bandas);

router.post('/bandas', gustosController.post_bandas);

router.get('/hobbies', gustosController.get_hobbies);

router.post('/hobbies', gustosController.post_hobbies);


module.exports = router;