const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

// Configuração de arquivos estáticos, views, etc.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//tentativa de mostrar view login
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para renderizar a página inicial (exemplo com EJS)
app.get('/', (req, res) => {
  res.render('login', {
    title: 'Página Inicial',
    message: 'Bem-vindo ao aplicativo com EJS, CSS e Controllers Assíncronos!'
  });
});

/* // Exemplo: rota com EJS
app.get('/users', async (req, res) => {
  const tarefas = await Tarefa.findAll();
  res.render('login.ejs', { tarefas });
}); */

//carrega as rotas do userRoutes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); //ativa a api/users/(rotas que defini no userRoutes)

//carrega as rotas do tarefaRoutes
const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/api/tarefa', tarefaRoutes); //ativa a api/tarefa/(rotas que defini no tarefaRoutes)

//carrega as rotas de habitoRoutes
const habitoRoutes = require('./routes/habitoRoutes');
app.use('/api/habito', habitoRoutes);

const interessesRoutes = require('./routes/interessesRoutes');
app.use('/api/interesses', interessesRoutes);

//mensagem de sucesso
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
