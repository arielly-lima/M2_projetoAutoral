const pool = require('../config/db');

//Criar habito
async function criarHabito({id_usuario, titulo, descricao, frequencia_por_semana}){
    const query = `INSERT INTO habitos (id_usuario, titulo, descricao, frequencia_por_semana) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [id_usuario, titulo, descricao, frequencia_por_semana]
    const result = await pool.query(query, values);
    return result.rows [0];
}

//listar habitos
async function listarHabitos() {
  const result = await pool.query('SELECT * FROM habitos');
  return result.rows;
}

// Deletar hábito pelo ID
async function deletarHabito(id_habito) {
  const result = await pool.query(
    'DELETE FROM habitos WHERE id_habito = $1 RETURNING *',
    [id_habito]
  );
  return result.rows[0]; // retorna o hábito deletado (ou undefined se não existir)
}

// Ver hábito por ID
async function verHabito(id_habito) {
  const result = await pool.query(
    'SELECT * FROM habitos WHERE id_habito = $1',
    [id_habito]
  );
  return result.rows[0]; // retorna o hábito encontrado
}

// Editar hábito (atualizar título, descrição, frequência)
async function editarHabito(id_habito, titulo, descricao, frequencia_por_semana) {
  const result = await pool.query(
    'UPDATE habitos SET titulo = $1, descricao = $2, frequencia_por_semana = $3 WHERE id_habito = $4 RETURNING *',
    [titulo, descricao, frequencia_por_semana, id_habito]
  );
  return result.rows[0]; // retorna o hábito atualizado
}

module.exports = {
  deletarHabito,
  listarHabitos,
  verHabito,
  editarHabito,
  criarHabito,
};