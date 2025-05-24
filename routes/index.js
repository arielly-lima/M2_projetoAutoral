const express = require('express');
const router = express.Router();
const path = require('path');
const userRoutes = require('./userRoutes');

// Página inicial
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Página Inicial',
    content: path.join(__dirname, '../views/pages/page1')
  });
});

// Página "sobre"
router.get('/about', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Sobre',
    content: path.join(__dirname, '../views/pages/page2')
  });
});

// Rotas para usuários
router.use('/users', userRoutes);

module.exports = router;
