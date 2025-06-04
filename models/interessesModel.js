const pool = require('../config/db');

// Criar novo interesse
async function criarInteresse({ id_usuario, hobbies, filmes, series, musicas }) {
  const query = `
    INSERT INTO interesses (id_usuario, hobbies, filmes, series, musicas)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [id_usuario, hobbies, filmes, series, musicas];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Listar todos os interesses
async function listarInteresses() {
  const result = await pool.query('SELECT * FROM interesses');
  return result.rows;
}

// Apagar interesse por ID
async function apagarInteresse(id_interesse) {
  const query = 'DELETE FROM interesses WHERE id_interesse = $1 RETURNING *';
  const result = await pool.query(query, [id_interesse]);
  return result.rows[0]; // Retorna o interesse deletado (ou undefined se não encontrar)
}

module.exports = {
  criarInteresse,
  listarInteresses,
  apagarInteresse,
};
