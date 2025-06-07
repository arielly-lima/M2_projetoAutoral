//rotas de API para tarefas
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Página inicial
router.get('/tarefas', (req, res) => {
  //view
  res.render('pages/tarefas', { erro: null });
});

router.get('/criartarefa', (req, res) => {
  res.render('pages/tarefas', { erro: null });
});

//listar tarefas (GET)
router.get('/', tarefaController.listarTarefas);

// Criar tarefas (POST)
router.post('/', tarefaController.criarTarefa);

//editar tarefas (PUT)
router.put('/:id_tarefa', tarefaController.editarTarefa);

//excluir tarefas (DELETE)
router.delete('/:id_tarefa', tarefaController.excluirTarefa);

//marcar como concluida (patch)
router.patch('/:id_tarefa/concluida', tarefaController.concluirTarefa);

module.exports = router;

