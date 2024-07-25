# Desafio Técnico | Recrutei

Este projeto foi desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Front-end React Pleno na Recrutei. A aplicação simula um sistema de gestão de tarefas no estilo Kanban, semelhante ao Trello.

## Funcionalidades Implementadas

#### Tela de Listagem de Investimentos:

- Visualização das Tarefas: A aplicação exibe as tarefas agrupadas por etapas pré-definidas: Ideias, A Fazer, Fazendo, Feito.
- Drag and Drop: Os cards (representando as tarefas) podem ser movidos entre as colunas através de drag and drop.
- Scroll Horizontal: Para telas menores, a aplicação permite a rolagem horizontal das colunas.
- Criação de Tarefas: Um botão "Criar Tarefa" abre uma modal com um formulário para cadastrar uma nova tarefa.
- Validação de Formulário: O formulário de criação de tarefas valida os campos antes de permitir a criação da tarefa.
- Visualização de Tarefa: Ao clicar em um card, uma modal é aberta mostrando os detalhes da tarefa.

## Tecnologias Utilizadas
#### Este projeto foi desenvolvido utilizando o ReactJs/Next - Typescript

- Styled-components: Biblioteca para estilização de componentes.
- React Beautiful DnD: Biblioteca para implementação de drag and drop
- Ant Design: Biblioteca de componentes
- SWR: Biblioteca para fetching de dados
- Axios: Biblioteca para a integração com a api.
- Moment.js: Biblioteca para manipulação de datas.
- UUID: Biblioteca para geração de identificadores únicos.

## Instalação.

Clone o repositório

● git clone https://github.com/devmichaelheming/challenge-recrutei

Instale as dependências

    Npm install ou yarn install

## Execução.

Após clonar o projeto e instalar as dependências, abra o mesmo em seu terminal e execute o seguinte comando:

    npm run dev ou yarn dev
