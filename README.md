# Documentação do Projeto Angular

## Introdução

Este projeto Angular é uma aplicação de gerenciamento de cursos que permite o cadastro de cursos, a definição de pré-requisitos para cursos e a alocação de disciplinas aos cursos.

## Requisitos

- Cadastro de cursos
- Definição de pré-requisitos para cursos
- Alocação de disciplinas aos cursos

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```bash
npm install
```

## Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando no terminal:

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`.

## Funcionalidades

### Cadastro de Cursos

Os usuários podem criar novos cursos fornecendo detalhes como o nome do curso, a descrição, o coordenador, a mensalidade, a duração e o número de vagas.

### Definição de Pré-requisitos para Cursos

Os usuários podem definir pré-requisitos para cada curso.

### Alocação de Disciplinas aos Cursos

Os usuários podem alocar disciplinas a cursos. Cada disciplina tem um professor, uma modalidade (presencial ou online) e um tipo (obrigatória ou eletiva).