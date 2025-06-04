const habitoModel = require('../models/habitoModel');

// Criar hábito
exports.criarHabito = async (req, res) => {
  const { id_usuario, titulo, descricao, frequencia_por_semana } = req.body;
  try {
    const novoHabito = await habitoModel.criarHabito({ id_usuario, titulo, descricao, frequencia_por_semana });
    res.status(201).json(novoHabito);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os hábitos
exports.listarHabitos = async (req, res) => {
  try {
    const habitos = await habitoModel.listarHabitos();
    res.status(200).json(habitos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Ver hábito específico
exports.verHabito = async (req, res) => {
  const { id_habito } = req.params;
  try {
    const habito = await habitoModel.verHabito(id_habito);
    if (!habito) {
      return res.status(404).json({ message: 'Hábito não encontrado' });
    }
    res.status(200).json(habito);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar hábito
exports.deletarHabito = async (req, res) => {
  const { id_habito } = req.params;
  try {
    const habitoDeletado = await habitoModel.deletarHabito(id_habito);
    if (!habitoDeletado) {
      return res.status(404).json({ message: 'Hábito não encontrado' });
    }
    res.status(200).json({ message: 'Hábito deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar hábito
exports.editarHabito = async (req, res) => {
  const { id_habito } = req.params;
  const { titulo, descricao, frequencia_por_semana } = req.body;
  try {
    const habitoAtualizado = await habitoModel.editarHabito(id_habito, titulo, descricao, frequencia_por_semana);
    if (!habitoAtualizado) {
      return res.status(404).json({ message: 'Hábito não encontrado' });
    }
    res.status(200).json(habitoAtualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
