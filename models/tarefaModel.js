const pool = require('../config/db');

// Criar uma nova tarefa
async function criarTarefa({ id_usuario, id_habito, titulo, concluida }) {
  const query = `INSERT INTO tarefas_do_dia (id_usuario, id_habito, titulo, concluida) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [id_usuario, id_habito, titulo, concluida];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Listar todas as tarefas
async function listarTarefas() {
  const result = await pool.query('SELECT * FROM tarefas_do_dia');
  return result.rows;
}

// Editar uma tarefa
async function editarTarefa(id_tarefa, { titulo, concluida }) {
  const query = `
    UPDATE tarefas_do_dia
    SET titulo = $1, concluida = $2
    WHERE id_tarefa = $3
    RETURNING *`;
  const values = [titulo, concluida, id_tarefa];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Excluir uma tarefa
async function excluirTarefa(id_tarefa) {
  const query = 'DELETE FROM tarefas_do_dia WHERE id_tarefa = $1 RETURNING *';
  const values = [id_tarefa];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Concluir ou desconcluir tarefa
async function atualizarConclusao(id_tarefa, concluida) {
  const query = `UPDATE tarefas_do_dia SET concluida = $1 WHERE id_tarefa = $2`;
  const values = [concluida, id_tarefa];
  const result = await pool.query(query, values);
  return result.rowCount;
}

module.exports = {
  criarTarefa,
  listarTarefas,
  editarTarefa,
  excluirTarefa,
  atualizarConclusao
};
