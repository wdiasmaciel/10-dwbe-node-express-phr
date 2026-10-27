import express from 'express';
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();

app.use(express.json());

app.use("/usuarios", usuarioRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando");
});