/* //rotas de renderizaão de página
const express = require('express');
const router = express.Router();
const path = require('path');
const userRoutes = require('./userRoutes');

// Página inicial
router.get('/', (req, res) => {
  res.render("..pages/login");
});
 */