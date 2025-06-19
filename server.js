const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'segredo_super_secreto', // pode ser qualquer string
  resave: false,
  saveUninitialized: false
}));

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

// Configuração de arquivos estáticos, views, etc.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//carrega as rotas do userRoutes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes); //ativa a api/users/(rotas que defini no userRoutes)

//carrega as rotas do tarefaRoutes
const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/', tarefaRoutes); //ativa a /tarefa/(rotas que defini no tarefaRoutes)

//carrega as rotas de habitoRoutes
const habitoRoutes = require('./routes/habitoRoutes');
app.use('/habito', habitoRoutes);

const interessesRoutes = require('./routes/interessesRoutes');
app.use('/', interessesRoutes);

const perfilRoutes = require('./routes/perfilRoutes');
app.use('/', perfilRoutes);

//mensagem de sucesso
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
