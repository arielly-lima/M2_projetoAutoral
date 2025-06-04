const interesseModel = require('../models/interessesModel');

// Criar novo interesse
exports.criarInteresse = async (req, res) => {
  const { id_usuario, hobbies, filmes, series, musicas } = req.body;

  try {
    const novoInteresse = await interesseModel.criarInteresse({id_usuario, hobbies, filmes, series, musicas,
});
    res.status(201).json(novoInteresse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os interesses
exports.listarInteresses = async (req, res) => {
  try {
    const interesses = await interesseModel.listarInteresses();
    res.status(200).json(interesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Apagar interesse por ID
exports.apagarInteresse = async (req, res) => {
  const { id_interesse } = req.params;

  try {
    const interesseDeletado = await interesseModel.apagarInteresse(id_interesse);

    if (!interesseDeletado) {
      return res.status(404).json({ message: 'Interesse não encontrado' });
    }

    res.status(200).json({ message: 'Interesse excluído com sucesso', interesseDeletado });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
