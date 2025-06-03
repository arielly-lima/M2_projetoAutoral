const habitoModel = require('../models/habitoModel');

//criar habito
exports.criarHabito = async (req, res) => {
    try{
    const { id_usuario, titulo, descricao, frequencia_por_semana } = req.body;

    // Validação simples
    if (!id_usuario || !titulo || !frequencia_por_semana) {
      return res.status(400).json({ mensagem: 'Preencha todos os campos obrigatórios.' });
    }

    const novoHabito = await habitoModel.criarHabito(id_usuario, titulo, descricao, frequencia_por_semana);

    res.status(201).json(novoHabito); // Retorna o hábito criado com status 201 (Created)
  } catch (error) {
    console.error('Erro ao criar hábito:', error);
    res.status(500).json({ mensagem: 'Erro ao criar hábito.' });
  }
}

/* //Listar habitos
exports.listarHabitos = async (req, res) => {
    try{
        
    }
} */




