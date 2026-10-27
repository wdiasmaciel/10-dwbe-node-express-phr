import express from 'express';

const router = express.Router();

let usuarios = [];

router.get('/', (req, res) => {
  res.json(usuarios);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((item) => item.id === id);

  if (!usuario) {
    return res.status(404).json({
      erro: 'Usuário não encontrado',
    });
  }

  res.json(usuario);
});

router.post('/', (req, res) => {
  const usuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
  };

  usuarios.push(usuario);
  res.status(201).json(usuario);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((item) => item.id === id);

  if (!usuario) {
    return res.status(404).json({
      erro: 'Usuário não encontrado',
    });
  }

  usuario.nome = req.body.nome;
  res.json(usuario);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      erro: 'Usuário não encontrado',
    });
  }

  usuarios.splice(index, 1);
  res.json({
    mensagem: 'Usuário removido',
  });
});

export default router;
