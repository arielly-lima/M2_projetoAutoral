const express = require('express');
const router = express.Router();
const interesseController = require('../controllers/interessesController');

// Criar interesse
router.post('/', interesseController.criarInteresse);

// Listar interesses
router.get('/', interesseController.listarInteresses);

// Deletar interesse
router.delete('/:id_interesse', interesseController.apagarInteresse);

module.exports = router;
