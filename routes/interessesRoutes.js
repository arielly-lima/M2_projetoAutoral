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
router.post('/interesses', async (req, res) => {
  try {
    const id_usuario = req.session.usuario?.id;

    if (!id_usuario) {
      return res.redirect('/login');
    }

    const { hobbies, filmes, series, musicas } = req.body;

    await interesseController.criarInteresse({ id_usuario, hobbies, filmes, series, musicas });

    res.redirect('/dashboard');
  } catch (err) {
    res.render('pages/interesses', {
      erro: 'Erro ao salvar interesse.',
      id_usuario: req.session.usuario.id
    });
  }
});

// Deletar interesse
router.delete('/:id_interesse', interesseController.apagarInteresse);

module.exports = router;
