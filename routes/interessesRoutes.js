const express = require('express');
const router = express.Router();
const interesseController = require('../controllers/interessesController');

// Criar interesse
router.post('/novointeresses', interesseController.criarInteresse);

// Listar interesses
router.get('/interesses', interesseController.listarInteresses);

// Deletar interesse
router.delete('/:id_interesse', interesseController.apagarInteresse);

module.exports = router;
