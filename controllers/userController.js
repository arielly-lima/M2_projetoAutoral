const usuarioModel = require('../models/userModel');

// Criar novo usuário
exports.criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    await usuarioModel.criarUsuario(nome, email, senha);
    res.redirect('/login'); // redireciona para a tela de login após o cadastro
  } catch (err) {
    res.status(400).render('register', { erro: err.message });
  }
};

// Login do usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await usuarioModel.buscarPorEmail(email);

    if (!usuario) {
      return res.status(401).render('pages/login', { erro: 'Usuário não encontrado' });
    }

    if (usuario.senha !== senha) {
      return res.status(401).render('pages/login', { erro: 'Senha incorreta' });
    }

    // Usuário autenticado com sucesso
    res.redirect('/tarefas');

  } catch (err) {
    res.status(500).render('pages/login', { erro: 'Erro interno no servidor' });
  }
};

// Listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.listarUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


