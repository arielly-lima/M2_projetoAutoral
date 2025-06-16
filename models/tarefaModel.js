const pool = require('../config/db');

// Criar uma nova tarefa
async function criarTarefa(id_usuario, { titulo, concluida }) {
  const query = `INSERT INTO tarefas_do_dia (id_usuario, titulo, concluida) VALUES ($1, $2, $3) RETURNING *`;
  const values = [ id_usuario, titulo, concluida];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Listar todas as tarefas
async function listarTarefas(id_usuario) {
  const query = 'SELECT * FROM tarefas_do_dia WHERE id_usuario = $1';
  const result = await pool.query(query, [id_usuario]);
  return result.rows;
}


// Editar uma tarefa
async function editarTarefa(id_usuario, id_tarefa, { titulo, concluida }) {
  const query = `
    UPDATE tarefas_do_dia
    SET titulo = $1, concluida = $2
    WHERE id_tarefa = $3
    AND id_usuario = $4
    RETURNING *`;
  const values = [titulo, concluida, id_tarefa, id_usuario];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Excluir uma tarefa
async function excluirTarefa(id_tarefa, id_usuario) {
  const query = 'DELETE FROM tarefas_do_dia WHERE id_tarefa = $1 AND id_usuario = $2 RETURNING *';
  const values = [id_tarefa, id_usuario];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Concluir ou desconcluir tarefa
async function concluirTarefa(id_tarefa, concluida, id_usuario) {
  const query = `UPDATE tarefas_do_dia SET concluida = $1 WHERE id_tarefa = $2 AND id_usuario = $3 RETURNING *`;
  const values = [concluida, id_tarefa, id_usuario];
  const result = await pool.query(query, values);
  return result.rowCount;
}

module.exports = {
  criarTarefa,
  listarTarefas,
  editarTarefa,
  excluirTarefa,
  concluirTarefa,
};
