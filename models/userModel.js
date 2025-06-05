const pool = require('../config/db');

// Criar novo usuário
async function criarUsuario(nome, email, senha) {
  const existingUser = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);

  if (existingUser.rows.length > 0) {
    throw new Error('Email já cadastrado');
  }

  const result = await pool.query(
    'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
    [nome, email, senha]
  );

  return result.rows[0];
}

//buscar por email
async function buscarPorEmail(email) {
  const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
  return result.rows[0];
}

// Buscar usuário por email (para login)
async function loginUsuario(email) {
  const result = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);
  return result.rows[0]; // pode ser undefined
}

// Listar todos os usuários
async function listarUsuarios() {
  const result = await pool.query('SELECT * FROM usuario');
  return result.rows;
}


module.exports = {
  criarUsuario,
  loginUsuario,
  listarUsuarios,
  buscarPorEmail,
};
