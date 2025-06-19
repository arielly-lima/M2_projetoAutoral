// controllers para terefas_do_dia
const tarefaModel = require('../models/tarefaModel');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  try {
    const id_usuario = req.session.usuario.id_usuario;
    const { titulo, concluida = false } = req.body;
    const novaTarefa = await tarefaModel.criarTarefa(id_usuario, { titulo, concluida });
    res.status(201).json(novaTarefa);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const id_usuario = req.session.usuario.id_usuario;
    const tarefas = await tarefaModel.listarTarefas(id_usuario);
    // Enviar usuario junto para a view
    res.render('pages/tarefas', { tarefas, usuario: req.session.usuario });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const id_usuario = req.session.usuario.id_usuario;
  const { id_tarefa, titulo, concluida } = req.body;

  try {
    const tarefaEditada = await tarefaModel.editarTarefa(id_usuario, id_tarefa, { titulo, concluida });

    if (!tarefaEditada) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(tarefaEditada);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id_tarefa } = req.body;
  const id_usuario = req.session.usuario.id_usuario; // pega o id do usuário logado

  try {
    const tarefaDeletada = await tarefaModel.excluirTarefa(id_tarefa, id_usuario);

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
  const id_usuario = req.session.usuario.id_usuario; // pega o id do usuário logado
  const {id_tarefa, concluida} = req.body;
  try {
    const result = await tarefaModel.concluirTarefa(id_tarefa, concluida, id_usuario);

    if (!result) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: `Tarefa atualizada para concluída = ${concluida}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
