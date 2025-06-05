//rotas de API para users
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Página inicial
router.get('/', (req, res) => {
  res.render("pages/login");
});

// Nova rota para a tela de registro
app.get('/register', (req, res) => {
  res.render('pages/register');
});


// Criar usuário (POST /users)
router.post('/', userController.criarUsuario);

// Login usuário (POST /users/login)
router.post('/login', userController.loginUsuario);

// Listar usuários (GET /users)
router.get('/', userController.listarUsuarios);

module.exports = router;
