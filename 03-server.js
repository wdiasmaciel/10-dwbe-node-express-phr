import express from 'express';
import { log, auth } from './middleware/usuarioMiddleware.js';

const app = express();
app.use(express.json());

let usuarios = [
    { id:1, nome:"João" },
    { id:2, nome:"Maria" }
];

app.get("/", log, (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.get("/usuarios", log, auth, (req, res) => {
  res.json(usuarios);
});

app.listen(3002, () => {
  console.log("Servidor rodando!");
});
