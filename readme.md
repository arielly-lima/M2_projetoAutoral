# Habits - Plataforma de Organização Pessoal

## 📌 Descrição
#### Gerenciador de tarefas para organização e produtividade.

Habits é uma plataforma web para organização pessoal de tarefas, hábitos e metas, com áreas temáticas como educação, saúde e finanças. Cada eixo conta com templates adaptáveis à rotina do usuário. Mais do que um gestor de tarefas, a plataforma promove a autenticidade por meio de perfis personalizados, onde é possível registrar hobbies, gostos, séries, livros e outros interesses.<br>

Fruto da atividade individual da disciplina de programação do Inteli,
este projeto estrutura um sistema web com backend em Node.js, framework Express e organização de pastas no padrão MVC (Model-View-Controller). Inclui também planejamento do banco de dados com modelo relacional.<br>

## 📁 Estrutura de Pastas
O projeto segue o padrão arquitetural **MVC (Model-View-Controller)**, que organiza o código em três camadas principais:

- **Model**: Define a estrutura dos dados e realiza a comunicação com o banco.
- **View**: Responsável pelas páginas que o usuário vê.
- **Controller**: Processa as requisições, interage com os Models e retorna as Views.

Para isso, a estrutura de pastas foi organizada da seguinte forma:

- `assets/`: Contém imagens e outros arquivos estáticos.
- `document/`: Armazena os documentos do projeto, como o modelo do banco de dados e a documentação WAD.
 - `config/`: Arquivos de configuração, como a conexão com o banco de dados.
- `controllers/`, `models/`, `routes/`, `views/`: Pastas principais do padrão MVC.
- `styles/` e `scripts/`: Arquivos CSS e JS públicos.
- `README.md`: Documento explicativo principal do projeto.

Estrutura detalhada:

```
M2-projetoAutoral/
|
├── assets/                # Imagens
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── db.js
├── controllers/
|   └── userController.js           # Lógica de controle das requisições
|   └── tarefaController.js  
├── document
|   └── wad.md
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── userModel.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
│   └── userRoutes.js
│   └── tarefaRoutes.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── scripts/               # Arquivos de JavaScript públicos
│    └── init.sql          #modelagem do SQL do banco de dados
│    └── runSQLScript.js          
├── views/                 # Arquivos CSS públicos
│   └── components/
│        └── header.ejs
│   └── css/ 
│        └── style.css
│   └── layout/
│        └── main.ejs
│   └── pages/      
├── tests/                # Arquivos de testes unitários
|    └── userController.test.js  
|    └── userModel.test.js   
|    └── userRoutes.test.js 
|    └── userService.test.js     
│    └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env                   # Arquivo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)

```

## 🔧 Como Executar Localmente

#### Tecnologias necessárias:
- **Node.js**
- **Express.js**
- **EJS (em desenvolvimento)**
- **JavaScript**
- **Arquitetura MVC**

#### Executar localmente
1. Clone este repositório:
   ```bash
   git clone https://github.com/arielly-lima/M2_projetoAutoral.git
   cd M2_projetoAutoral

2. Instale as dependências:
   ```bash
   npm install

3. Inicie o servidor:
    ```bash
    node server.js
4. Acesse em seu navegador:
    ```bash
    http://localhost:3000

---------------

### 📦 Como configurar o banco de dados PostgreSQL

1. Crie uma conta no [Supabase](https://supabase.com/), ou similar.
2. Crie um projeto
3. Altere o arquivo .env com as informações de conexão do seu projeto:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=nome_do_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```
4. Edite o arquivo init.sql com o código SQL para criação do banco de dados
---

### 🧱 **Como rodar as migrações**

Para testar ou criar novas migrações neste repositório, foi utilizado o aquivo `init.sql`
Como executá-las:
1. Clone o repositório
2. Rode as migrações SQL com o comando: 

    ```bash
    npm run init-db 
    ```
3. Caso seja necessário, crie novas migrações utilizando o mesmo arquivo.