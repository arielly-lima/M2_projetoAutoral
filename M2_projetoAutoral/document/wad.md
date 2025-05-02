# Web Application Document - Projeto Individual - Módulo 2 - Inteli
## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)
O sistema desenvolvido é uma plataforma web chamada Habits, voltada para a organização pessoal de tarefas, hábitos e metas. Seu objetivo é ajudar os usuários a estruturarem suas rotinas de forma equilibrada, por meio de áreas temáticas como educação, saúde, vida financeira, entre outras. Cada área contará com templates personalizáveis, permitindo que os usuários adaptem o sistema às suas necessidades.

Mais do que uma simples ferramenta de produtividade, o projeto também busca estimular o autoconhecimento e a autenticidade individual. Para isso, a plataforma oferece um espaço de perfil onde o usuário pode registrar seus hobbies, preferências culturais (como séries, livros e músicas), bem como dados sobre suas conquistas pessoais.

O sistema será implementado utilizando a linguagem JavaScript com o framework Node.js e a biblioteca Express. A estrutura de pastas segue o padrão MVC (Model-View-Controller), promovendo a organização e a manutenção do código. A persistência dos dados será realizada por meio de um banco relacional.

A ideia é criar uma plataforma que não apenas auxilie na produtividade, mas que também incentive a reflexão pessoal e o desenvolvimento humano por meio de ferramentas integradas como o “diário de bordo” e a “pergunta diária”, funcionalidades previstas para futuras versões do projeto.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)
#### Persona 1
<div align="center">
<sup> Figura 1: Persona 01 </sup>
<img src= "../assets/assets_wad/persona.png"/><br>
<sup>Fonte: Material produzido pelo autor (2025).</sup>
</div>

### 2.2. User Stories (Semana 01 - opcional)
<div align="center">
<sup> Quadro 1: User Storie US01 </sup>

Identificação | US01 (Prioritária)
--- | ---
Persona | Maria Alyce 
User Story | “Como estudante e Jovem Aprendiz, quero templates de organização para planejar minhas atividades diárias e poupar tempo”
Critério de aceite 1 | CR1: Alyce pode selecionar eixos da vida pessoal que deseja organizar e terá acesso a templates prontos.
Critério de aceite 2 | CR2: |Os templates devem ser personalizáveis para Alyce se planejar de acordo com sua necessidade. | 
Critérios INVEST | **Independente**: A funcionalidade não depende de outras features. Pode ser desenvolvida e entregue isoladamente. <br> **Negociável**: Os templates e a forma de personalização podem ser ajustados com base em feedbacks.<br> **Valorosa**:  Resolve a dor principal da persona (falta de tempo e organização fragmentada).<br> **Estimável**:  O escopo é claro (templates pré-prontos + personalização). <br> **Small**: Foca em uma necessidade específica (organização diária).<br> **Testável:** Pode ser avaliada com base nos critérios de aceite (Templates visualizáveis e personalizáveis).| <br>

<sup>Fonte: Material produzido pelo autor (2025).</sup>

---
<sup> Quadro 2: User Storie US02 </sup>

Identificação | US02
--- | ---
Persona | Maria Alyce |
User Story | “Como jovem esportista, quero manter hábitos pessoais e hobbies, para manter um equilíbrio entre obrigações e atividades que me trazem bem-estar.” |
Critério de aceite 1 | CR1: O usuário deve poder adicionar hábitos ou hobbies, com campos obrigatórios mínimos (nome, frequência e categoria).|
Critério de aceite 2 | CR2: O sistema deve permitir associar ícones ou cores aos hábitos/hobbies, facilitando a identificação rápida na dashboard.| <br>

<sup>Fonte: Material produzido pelo autor (2025).</sup>

---

<sup> Quadro 3: User Storie US03 </sup>

Identificação | US03
--- | ---
Persona | Maria Alyce |
User Story | “Como usuário, quero uma interface limpa e intuitiva, para encontrar rapidamente as funcionalidades que preciso." |
Critério de aceite 1 | CR1: O usuário deve acessar qualquer funcionalidade principal (hábitos, metas, agenda) em no máximo 2 cliques a partir da tela inicial.|
Critério de aceite 2 | CR2: O layout da tela inicial deve conter apenas atividades principais que serão realizadas no dia.|<br>

<sup>Fonte: Material produzido pelo autor (2025).</sup>
</div>

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---