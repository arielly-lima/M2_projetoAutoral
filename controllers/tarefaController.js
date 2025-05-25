// controllers para terefas_do_dia
const pool = require('../config/db');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
   const { id_usuario, id_habito, titulo, concluida } = req.body;

  const query = `INSERT INTO tarefas_do_dia (id_usuario, id_habito, titulo, concluida) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [id_usuario, id_habito, titulo, concluida];

  try {
    const result = await pool.query(query, values);
    const tarefa = result.rows[0]; //pega a primeira linha retornada pela query
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = 'SELECT * FROM tarefas_do_dia';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id_tarefa } = req.params;
  const { titulo, concluida } = req.body;

  const query = `
    UPDATE tarefas_do_dia
    SET titulo = $1, concluida = $2
    WHERE id_tarefa = $3
    RETURNING *`;
  const values = [titulo, concluida, id_tarefa];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id_tarefa } = req.params;

  const query = 'DELETE FROM tarefas_do_dia WHERE id = $1 RETURNING *';
  const values = [id_tarefa];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//marcar tarefa como concluida
exports.concluirTarefa = async (req, res) => {
  const { id_tarefa } = req.params;
  const { concluida } = req.body; // true ou false

  const query = `UPDATE tarefas_do_dia SET concluida = $1 WHERE id_tarefa = $2`;
  const values = [concluida, id_tarefa];

  try {
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: `Tarefa atualizada para concluída = ${concluida}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
