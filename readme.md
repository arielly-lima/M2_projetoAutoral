# Habits - Plataforma de Organização Pessoal

## 📌 Descrição
#### Gerenciador de tarefas para organização e produtividade.

Habits é uma plataforma web para organização pessoal de tarefas, hábitos e metas, com áreas temáticas como educação, saúde e finanças. Cada eixo conta com templates adaptáveis à rotina do usuário. Mais do que um gestor de tarefas, a plataforma promove a autenticidade por meio de perfis personalizados, onde é possível registrar hobbies, gostos, séries, livros e outros interesses. <br>

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
