const pool = require('../config/db');

//criar novo usuário
exports.criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  const query = 'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *';
  const values = [nome, email, senha];

  //estrutura do JavaScript usada para testar um bloco de código que pode dar erro.
  try {
    const result = await pool.query(query, values);
    const usuario = result.rows[0];
    res.status(201).json(usuario);
    
  //o que fazer se der erro
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//login usuario
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  const query = 'SELECT * FROM usuario WHERE email = $1';
  const values = [email];

  try {
    const result = await pool.query(query, values);
    const usuario = result.rows[0]; // pega o usuário do banco

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ mensagem: 'Email ou senha inválidos' });
    }

    res.status(200).json({ mensagem: 'Login realizado com sucesso', usuario });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//listar usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuario');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};