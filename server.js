const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); // vai carregar index.js automaticamente

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usa todas as rotas com o prefixo /api
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
