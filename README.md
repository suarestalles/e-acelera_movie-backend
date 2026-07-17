# 🎬 Acelera Movies - Backend

Backend de uma aplicação de catálogo de filmes desenvolvido com **Node.js** e **TypeScript**, responsável pelo gerenciamento dos dados dos filmes através de uma API REST.

A aplicação permite realizar operações de criação, consulta, atualização e remoção de filmes, utilizando **TypeORM** para persistência dos dados e **Zod** para validação das informações recebidas pela API.

O projeto foi desenvolvido seguindo uma organização baseada na separação de responsabilidades, buscando manter o código escalável e de fácil manutenção.

---

## 🚀 Funcionalidades

* ✅ Cadastro de filmes
* ✅ Listagem de filmes
* ✅ Busca de filme por ID
* ✅ Atualização de filmes
* ✅ Remoção de filmes
* ✅ Validação dos dados recebidos pela API
* ✅ Persistência utilizando ORM
* ✅ Gerenciamento de alterações no banco através de migrations
* ✅ Controle de criação e atualização dos registros

---

## 🛠️ Tecnologias utilizadas

### Backend

* [Node.js](https://nodejs.org/) - Ambiente de execução da aplicação
* [TypeScript](https://www.typescriptlang.org/) - Tipagem estática e maior segurança no desenvolvimento
* [TypeORM](https://typeorm.io/) - ORM para comunicação com o banco de dados
* [Zod](https://zod.dev/) - Biblioteca para validação e definição de schemas
* [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional

---

## 🏗️ Arquitetura do projeto

A aplicação foi estruturada separando as responsabilidades entre as camadas:

```text
src/
├── controllers/
│   └── movie.controller.ts
│
├── services/
│   └── movie.service.ts
│
├── entities/
│   └── movie.entity.ts
│
├── schemas/
│   └── movie.schema.ts
│
├── routes/
│   └── movie.routes.ts
│
├── database/
│   └── data-source.ts
│
└── migrations/
```

---

## 📌 Modelo de dados

A entidade principal da aplicação é o filme.

Exemplo:

```typescript
Movie {
  id: string;
  title: string;
  synopsis: string;
  genre: string;
  director: string;
  releaseYear: number;
  duration: number;
  rating: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## ✅ Validação de dados

A aplicação utiliza **Zod** para validar os dados recebidos antes de serem processados pela camada de negócio.

Exemplo de schema:

```typescript
const movieSchema = z.object({
  title: z.string().min(1),
  synopsis: z.string().min(1),
  genre: z.string().min(1),
  director: z.string().min(1),
  releaseYear: z.number(),
  duration: z.number(),
  rating: z.number().min(0).max(10),
  imageUrl: z.string().url(),
});
```

Com isso, a API garante que os dados recebidos seguem o formato esperado antes da persistência no banco.

---

## 🔌 Endpoints da API

### Filmes

| Método | Endpoint      | Descrição                         |
| ------ | ------------- | --------------------------------- |
| GET    | `/movies`     | Lista todos os filmes cadastrados |
| GET    | `/movies/:id` | Busca um filme pelo identificador |
| POST   | `/movies`     | Cria um novo filme                |
| PUT    | `/movies/:id` | Atualiza um filme existente       |
| DELETE | `/movies/:id` | Remove um filme                   |

---

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de iniciar, tenha instalado:

* Node.js
* npm ou yarn
* PostgreSQL

---

### Instalação

Clone o repositório:

```bash
git clone <repository-url>
```

Acesse a pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

---

## 🔐 Configuração das variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3001

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=movies
```

Configure os valores de acordo com o seu ambiente local.

---

## 🗄️ Banco de dados e migrations

O projeto utiliza TypeORM migrations para versionamento da estrutura do banco.

### Gerar uma migration

```bash
npm run migration:generate
```

### Executar migrations pendentes

```bash
npm run migration:run
```

### Reverter uma migration

```bash
npm run migration:revert
```

---

## ▶️ Executando a aplicação

Modo desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3001
```

---

## 🔄 Fluxo da aplicação

```text
Request HTTP
     |
     ↓
Controller
     |
     ↓
Validação (Zod Schema)
     |
     ↓
Service
     |
     ↓
TypeORM Entity
     |
     ↓
Database
```

---

## 📌 Próximas melhorias

Possíveis evoluções:

* [ ] Autenticação e autorização de usuários
* [ ] Documentação utilizando Swagger
* [ ] Testes automatizados
* [ ] Paginação dos filmes
* [ ] Filtros avançados de busca
* [ ] Upload de imagens
* [ ] Dockerização da aplicação
* [ ] CI/CD

---

## 👨‍💻 Autor

Desenvolvido por **Talles Suares**.

---

## 📄 Licença

Este projeto está sob a licença MIT.
