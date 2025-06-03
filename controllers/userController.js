const usuarioModel = require('../models/userModel');

// Criar novo usuário
exports.criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const novoUsuario = await usuarioModel.criarUsuario(nome, email, senha);
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
};

// Login do usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await usuarioModel.loginUsuario(email);

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ mensagem: 'Email ou senha inválidos' });
    }

    res.status(200).json({ mensagem: 'Login realizado com sucesso', usuario });
  } catch (err) {
    res.status(500).json({ error: err.message });
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
