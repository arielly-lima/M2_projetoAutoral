// controllers para terefas_do_dia
const tarefaModel = require('../models/tarefaModel');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
   const { id_usuario, id_habito, titulo, concluida } = req.body;

   try {
    const novaTarefa = await tarefaModel.criarTarefa(id_usuario, id_habito, titulo, concluida);
    res.status(201).json(novaTarefa);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
   try {
      const tarefas = await tarefaModel.listarTarefas();
      res.status(200).json(tarefas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  try {
    const editar = await this.tarefaModel.editarTarefa();
    res.status(200).json(editar)
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
  const { id_tarefa } = req.body;
  try {
    const tarefaDeletada = await tarefaModel.excluirTarefa(id_tarefa);

    if (!tarefaDeletada) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//marcar tarefa como concluida
exports.concluirTarefa = async (req, res) => {
  const {id_tarefa, concluida} = req.body;
  try {
    const result = await tarefaModel.concluirTarefa(id_tarefa, concluida);

    if (!result) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: `Tarefa atualizada para concluída = ${concluida}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
