//rotas de API para habitos
const express = require('express');
const router = express.Router();
const habitoController = require('../controllers/habitoController');

//Criar habito (POST)
router.post('/criar', habitoController.criarHabito);

//listar habitos
router.get('/', habitoController.listarHabitos);

module.exports = router;