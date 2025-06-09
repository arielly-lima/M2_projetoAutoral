const interesseModel = require('../models/interessesModel');

// Criar novo interesse
exports.criarInteresse = async (req, res) => {
  console.log("Sessão atual:", req.session); // <-- Coloque aqui dentro!

  const id_usuario = req.session.usuario?.id_usuario;
  
  console.log("ID do usuário logado:", id_usuario);

  if (!id_usuario) {
    return res.redirect('/tarefas');
  }

  const { hobbies, filmes, series, musicas } = req.body;
  console.log("Dados do formulário:", req.body);

  try {
    await interesseModel.criarInteresse({ id_usuario, hobbies, filmes, series, musicas });
    res.redirect('/tarefas'); 
/*     res.send('Interesse salvo com sucesso!'); */

  } catch (err) {
    console.error('Erro ao criar interesse:', err);
    res.render('pages/interesses', {
      erro: 'Erro ao salvar interesse.',
    });
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
