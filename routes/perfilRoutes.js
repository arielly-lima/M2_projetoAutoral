const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.get('/perfil', perfilController.infoPerfil);

module.exports = router;