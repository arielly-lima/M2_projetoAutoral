const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Criar usuário (POST /users)
router.post('/', userController.criarUsuario);

// Login usuário (POST /users/login)
router.post('/login', userController.loginUsuario);

// Listar usuários (GET /users)
router.get('/', userController.listarUsuarios);

module.exports = router;
