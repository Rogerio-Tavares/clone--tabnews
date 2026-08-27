function status(request, response) {
  response
    .status(200)
    .json({ chave: "Estou testando a resposta da API interna." });
}

export default status;
