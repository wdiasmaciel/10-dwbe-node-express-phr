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
