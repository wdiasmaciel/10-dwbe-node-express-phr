# 10-dwbe-node-express-phr

Link:

https://app.notion.com/p/Criando-uma-API-REST-61c44ced3625829e902501c1fd99e7c4

---

## Comandos Iniciais

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

Criar o arquivo `.gitignore`:
 
```text
node_modules/
```

```bash
npm init -y
```

No arquivo `package.json`, substituir ` "type": "commonjs"` por ` "type": "module"`:

Instalar o `Express`:

```bash
npm install express
```

```js
{
  "name": "10-dwbe-node-express-phr",
  "version": "1.0.0",
  "description": "Link:",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/10-dwbe-node-express-phr.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/10-dwbe-node-express-phr/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/10-dwbe-node-express-phr#readme",
  "dependencies": {
    "express": "^5.3.0"
  }
}
```

---

## Servidor 01

Criar o arquivo:

```jsx
01-server.js
```

```js
import express from 'express';

const app = express();
app.use(express.json());

let usuarios = [
    { id:1, nome:"João" },
    { id:2, nome:"Maria" }
];

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
```

Executar o servidor:

```bash
node 01-server.js
```

Abrir no navegador:

```text
http://localhost:3000
```

Resposta para rota `/`:

```text
{
  "mensagem": "API funcionando"
}
```

Resposta para rota `/usuarios`:
```text
[
  {
    "id": 1,
    "nome": "João"
  },
  {
    "id": 2,
    "nome": "Maria"
  }
]```
---

## Servidor 02

Criar o arquivo:

```jsx
02-server.js
```

```js
import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
```

Executar o servidor:

```bash
node 02-server.js
```

Abrir no navegador:

```text
http://localhost:3001
```

Resposta:

```text
{
  "mensagem": "API funcionando"
}
```

---

## Atualização Automática do Servidor

Atualização automática do servidor em caso de alteração do arquivo.

Atualizar o arquivo `package.json` adicionando a diretiva `dev1` e `dev2`:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev1" : "node --watch 01-server.js",
    "dev2" : "node --watch 02-server.js"
  }
```

```json
{
  "name": "api-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev1": "node --watch 01-server.js",
    "dev2": "node --watch 02-server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "express": "^5.3.0"
  }
}
```

Executar novamente os servidores digitando no terminal:

```bash
npm run dev1
```

```bash
npm run dev2
```

## Teste

Instale a extensão `Rest Client` no `VS Code`:

![Rest Client](restclient.png)

Crie o arquivo `teste.http`:


## Exercício

Usando Express, crie um servidor que aceite requisições para retornar em formato `JSON`:

1. Os nomes dos cursos de uma universidade.
2. Os nomes das disciplinas dos cursos.
3. Os nomes dos alunos matriculados em cada disciplina.

Teste a API criando um arquivo `.http` para a extensão `Rest Client`.