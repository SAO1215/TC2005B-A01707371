const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    console.log(request.body);
    response.render('preguntas');
});

router.get('/respuesta', (request, response, next) => {
    console.log(request.body);
    response.render('respuesta');
});


module.exports = router;