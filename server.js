const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//carrega as rotas do userRoutes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); //ativa a api/users/(rotas que defini no userRoutes)


//carrega as rotas do tarefaRoutes
const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/api/tarefa', tarefaRoutes); //ativa a api/tarefa/(rotas que defini no tarefaRoutes)

//mensagem de sucesso
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
