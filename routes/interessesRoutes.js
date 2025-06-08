const express = require('express');
const router = express.Router();
const interesseController = require('../controllers/interessesController');

// Página de formulário para novo interesse (GET)
router.get('/novointeresse', (req, res) => {
  res.render('pages/interesses', { erro: null });
});

// Criar interesse (POST)
router.post('/novointeresse', interesseController.criarInteresse);

// Listar interesses (GET)
router.get('/interesses', interesseController.listarInteresses);

// Deletar interesse (DELETE)
router.delete('/:id_interesse', interesseController.apagarInteresse);

module.exports = router;
