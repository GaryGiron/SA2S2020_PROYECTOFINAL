var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inicio', { title: 'Generador de Juegos y Torneos' });
});

router.get('/logueo', function(req, res, next) {
  res.render('inicio', { title: 'Generador de Juegos y Torneos' });
});


router.get('/tablero', function(req, res, next) {
  res.render('tablero', { title: 'Sum Swamp' });
});

router.get('/tablero', function(req, res, next) {
  res.render('tablero', { title: 'Administracion e Usuarios' });
});
module.exports = router;
