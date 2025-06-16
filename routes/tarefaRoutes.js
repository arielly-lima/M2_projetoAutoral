//rotas de API para tarefas
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Página inicial
router.get('/tarefas/view', (req, res) => {
  const id_usuario = req.session?.usuario?.id_usuario || null;
  //view
  res.render('pages/tarefas', {
    erro: null,
    id_usuario,
  });
});

router.get('/criartarefa', (req, res) => {
  const id_usuario = req.session?.usuario?.id_usuario || null;

  res.render('pages/tarefas', {
    erro: null,
    id_usuario,
  });
});


//listar tarefas (GET)
router.get('/tarefas', tarefaController.listarTarefas);

// Criar tarefas (POST)
router.post('/tarefas', tarefaController.criarTarefa);

//editar tarefas (PUT)
router.put('/tarefas/:id_tarefa', tarefaController.editarTarefa);

//excluir tarefas (DELETE)
router.delete('/tarefas/:id_tarefa', tarefaController.excluirTarefa);

//marcar como concluida (patch)
router.patch('/tarefas/:id_tarefa/concluida', tarefaController.concluirTarefa);

module.exports = router;

