# Web Full-Stack Lab

Laboratório prático criado para aprender desenvolvimento full-stack entendendo a arquitetura de uma aplicação, e não apenas reproduzindo comandos ou código pronto.

O projeto evoluirá, sessão por sessão, para um **gerenciador de projetos e tarefas** completo construído com Next.js.

> **Progresso atual:** Sessão 2 concluída  
> **Próximo passo:** Sessão 3 — layout compartilhado, `children`, CSS do componente e `props`  
> **Última atualização:** 16 de agosto de 2026

## Objetivo

Ao final da trilha, o projeto deverá permitir:

- cadastrar, consultar, editar e excluir projetos;
- criar tarefas vinculadas aos projetos;
- controlar status, prioridade e prazo;
- pesquisar e filtrar informações;
- validar formulários e exibir mensagens de erro;
- persistir os dados em PostgreSQL com Prisma;
- autenticar usuários;
- proteger páginas e operações;
- executar testes essenciais;
- funcionar de forma responsiva;
- ser publicado e apresentado como projeto de portfólio.

## Tecnologias

### Utilizadas atualmente

<div align="center">

<img src="https://skillicons.dev/icons?i=js,nextjs,react,css,pnpm,git,github&theme=dark" alt="JavaScript, Next.js, React, CSS, pnpm, Git e GitHub" />

</div>

- Next.js `16.3.1`;
- React `19.2.8`;
- JavaScript;
- CSS Modules;
- pnpm;
- Git e GitHub.

### Planejadas para as próximas etapas

<div align="center">

<img src="https://skillicons.dev/icons?i=ts,postgres,prisma,firebase,vercel&theme=dark" alt="TypeScript, PostgreSQL, Prisma, Firebase e Vercel" />

</div>

- TypeScript;
- PostgreSQL;
- Prisma;
- Firebase Authentication;
- validação de dados;
- testes automatizados;
- deploy da aplicação.

## Rotas disponíveis

| Rota | Arquivo | Função atual |
| --- | --- | --- |
| `/` | `src/app/page.js` | Página inicial interativa |
| `/projetos` | `src/app/projetos/page.js` | Listagem futura de projetos |
| `/projetos/novo` | `src/app/projetos/novo/page.js` | Cadastro futuro de projetos |

## Progresso por sessão

### Sessão 1 — Fundamentos do projeto

- [x] Conferir Node.js, pnpm e Git;
- [x] criar o projeto com `create-next-app`;
- [x] executar o servidor de desenvolvimento;
- [x] entender que `src/app/page.js` representa a rota `/`;
- [x] criar a primeira página com JSX;
- [x] aplicar estilos com `page.module.css`;
- [x] utilizar `"use client"`;
- [x] criar estado com `useState`;
- [x] responder a um evento de clique;
- [x] alternar o estado da interface;
- [x] criar o primeiro commit;
- [x] criar e conectar o repositório no GitHub;
- [x] enviar a branch `main`.

### Sessão 2 — Rotas, links e componente reutilizável

- [x] Criar a página `/projetos`;
- [x] entender como pastas e arquivos `page.js` formam rotas;
- [x] navegar com o componente `Link` do Next.js;
- [x] diferenciar botão de ação e link de navegação;
- [x] criar `src/components/Navegacao.js`;
- [x] reutilizar o componente de navegação em diferentes páginas;
- [x] criar a rota aninhada `/projetos/novo`;
- [x] revisar arquivos e links no GitHub;
- [x] registrar e enviar as alterações.

### Sessão 3 — Layout compartilhado e propriedades

- [ ] Entender a responsabilidade de `src/app/layout.js`;
- [ ] entender como o Next.js utiliza `children`;
- [ ] colocar a navegação no layout compartilhado;
- [ ] remover a repetição da navegação nas páginas;
- [ ] criar um CSS Module próprio para a navegação;
- [ ] criar um componente que recebe dados por `props`;
- [ ] realizar o exercício prático;
- [ ] revisar o `diff`, criar o commit e enviar ao GitHub.

## Trilha completa

| Etapa | Conteúdo principal | Situação |
| --- | --- | --- |
| 1. Fundamentos e estrutura | terminal, Next.js, App Router, JSX, CSS Modules e Git | Em andamento |
| 2. Rotas e componentes | rotas, `Link`, layouts, `children`, props e composição | Em andamento |
| 3. React e interatividade | estado, eventos, listas, formulários, filtros e imutabilidade | Não iniciada |
| 4. Arquitetura do Next.js | Server e Client Components, fluxo de dados, loading e erros | Não iniciada |
| 5. Backend e APIs | HTTP, Route Handlers, JSON, validação e tratamento de erros | Não iniciada |
| 6. Prisma e PostgreSQL | modelagem, migrations, relações, CRUD, filtros e transações | Não iniciada |
| 7. Firebase e autenticação | cadastro, login, sessão, identidade e rotas protegidas | Não iniciada |
| 8. Qualidade e segurança | TypeScript, testes, autorização, acessibilidade e desempenho | Não iniciada |
| 9. GitHub e publicação | branches, Pull Requests, documentação, deploy e logs | Não iniciada |

> A trilha é uma referência, não uma corrida. Uma sessão pode ocupar mais de um encontro quando o assunto exigir prática.

## Como executar o projeto

### Pré-requisitos

- Node.js;
- pnpm;
- Git.

### Instalação

```bash
git clone https://github.com/einelucas/web-fullstack-lab.git
cd web-fullstack-lab
pnpm install
```

### Servidor de desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Outros comandos

```bash
pnpm lint
pnpm build
pnpm start
```

## Estrutura atual

```text
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── page.module.css
│   └── projetos/
│       ├── page.js
│       └── novo/
│           └── page.js
└── components/
    └── Navegacao.js
```

## Método de cada sessão

Cada sessão segue este ciclo:

1. mapa mental curto do conceito;
2. implementação guiada;
3. explicação do papel de cada arquivo;
4. exercício prático;
5. teste no navegador e no terminal;
6. revisão do `diff`;
7. commit e envio ao GitHub;
8. atualização deste README.

Para evitar ambiguidades, toda orientação prática deve informar o caminho completo do arquivo, a ação exata, se o código é completo ou parcial e o resultado esperado.

## Histórico das sessões

- [Sessão 1 — primeira página interativa](https://github.com/einelucas/web-fullstack-lab/commit/3f712d7835ec2b0c7a1b8088e743142c65564959)
- [Sessão 2 — rotas e navegação reutilizável](https://github.com/einelucas/web-fullstack-lab/commit/a52da537d0e9b67204cb44e0b80bdb7207944888)
- [Correção da rota de novo projeto](https://github.com/einelucas/web-fullstack-lab/commit/537b3f4793a93086277e0580855d84d0fbad06b1)
- [Implementação da página de novo projeto](https://github.com/einelucas/web-fullstack-lab/commit/4152813e4a9f2d9d5847bc7628bff3ba96257303)

## Critério de conclusão

A trilha estará concluída quando for possível:

- explicar o fluxo navegador → Next.js → servidor → banco;
- criar uma funcionalidade completa, do formulário ao banco;
- escolher corretamente entre Server e Client Component;
- modelar e consultar dados relacionados;
- proteger dados e operações no servidor;
- diagnosticar erros usando terminal, rede e logs;
- versionar, documentar e publicar o projeto;
- revisar criticamente código produzido com auxílio de IA.

---

Este README é um documento vivo. Ao final de cada sessão, os itens concluídos devem ser marcados e o próximo passo deve ser atualizado.
