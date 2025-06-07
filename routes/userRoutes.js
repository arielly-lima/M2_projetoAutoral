//rotas de API para users
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* // Página inicial
router.get('/', (req, res) => {
  res.render('pages/login', { erro: null });
}); */

// Listar usuários (GET /users)
router.get('/', userController.listarUsuarios);

// Página de registro (GET)
router.get('/register', (req, res) => {
   res.render('pages/register', { erro: null });
});

// Registro de novo usuário (POST)
router.post('/register', userController.criarUsuario);

// Login usuário (POST /users/login)
router.post('/', userController.loginUsuario);

module.exports = router;
