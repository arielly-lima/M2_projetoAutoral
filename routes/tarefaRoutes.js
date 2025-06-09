//rotas de API para tarefas
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Página inicial
router.get('/tarefas', (req, res) => {
  const id_usuario = req.session?.usuario?.id_usuario || null;
  const id_habito = null;
  //view
  res.render('pages/tarefas', {
    erro: null,
    id_usuario,
    id_habito
  });
});

router.get('/criartarefa', (req, res) => {
  //view
  res.render('pages/tarefas', { erro: null });
});

//listar tarefas (GET)
router.get('/', tarefaController.listarTarefas);

// Criar tarefas (POST)
router.post('/tarefas', tarefaController.criarTarefa);

//editar tarefas (PUT)
router.put('/:id_tarefa', tarefaController.editarTarefa);

//excluir tarefas (DELETE)
router.delete('/:id_tarefa', tarefaController.excluirTarefa);

//marcar como concluida (patch)
router.patch('/:id_tarefa/concluida', tarefaController.concluirTarefa);

module.exports = router;

