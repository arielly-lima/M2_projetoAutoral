const express = require('express');
const router = express.Router();
const habitoController = require('../controllers/habitoController');

router.post('/', habitoController.criarHabito);
router.get('/', habitoController.listarHabitos);
router.get('/:id_habito', habitoController.verHabito);
router.delete('/:id_habito', habitoController.deletarHabito);
router.put('/:id_habito', habitoController.editarHabito);

module.exports = router;
