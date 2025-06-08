const express = require('express');
const router = express.Router();
const interesseController = require('../controllers/interessesController');

//Criar interesse
router.post('/novointeresse', (req, res) => {
  //view
   res.render('pages/interesses', { erro: null });
});

// Criar interesse
router.post('/novointeresse', interesseController.criarInteresse);

// Listar interesses
router.get('/interesses', interesseController.listarInteresses);

// Deletar interesse
router.delete('/:id_interesse', interesseController.apagarInteresse);

module.exports = router;
