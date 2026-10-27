export function log(req, res, next) {
  console.log("Requisição recebida");
  next();
}

export function auth(req, res, next) {
  const token = req.headers.authorization;

  if (token !== "123") {
    return res.status(401).json({
      erro: "Não autorizado",
    });
  }

  next();
}
