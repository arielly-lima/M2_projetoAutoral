const express = require('express');
const router = express.Router();
const interesseController = require('../controllers/interessesController');

// Página do formulário para interesses (GET)
router.get('/interesses', (req, res) => {
  if (!req.session.usuario) {
    return res.redirect('/login');
  }

  res.render('pages/interesses', {
    id_usuario: req.session.usuario.id,
    erro: null
  });
});

// Criar interesse (POST)
router.post('/interesses', interesseController.criarInteresse);


// Deletar interesse
router.delete('/:id_interesse', interesseController.apagarInteresse);

module.exports = router;
