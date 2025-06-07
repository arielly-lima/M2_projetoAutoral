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

/* //Mostrar a view de login
app.get('/', (req, res) => {
  res.render('pages/login');
}); */

//carrega as rotas do userRoutes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes); //ativa a api/users/(rotas que defini no userRoutes)

//carrega as rotas do tarefaRoutes
const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/tarefas', tarefaRoutes); //ativa a /tarefa/(rotas que defini no tarefaRoutes)

//carrega as rotas de habitoRoutes
const habitoRoutes = require('./routes/habitoRoutes');
app.use('/habito', habitoRoutes);

const interessesRoutes = require('./routes/interessesRoutes');
app.use('/interesses', interessesRoutes);

//mensagem de sucesso
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
