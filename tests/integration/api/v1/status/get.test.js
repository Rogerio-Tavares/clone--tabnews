test("GET to api/v1/status shold return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

/*
  Para entregar o resultado esperado. o teste precisa esperar que o fetch
  execute para entregar 200.
  Por isso foi adcionado "async" e "await".
*/

/*
  test("GET to api/v1/status shold return 200", () => {
  const response = fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

Acima é uma função síncrona e não permite esperar pela resposta do teste.
fazendo com que o fetch retorne antes de o teste entregar o resultado.
*/

/*
  Esse teste de integração serve para testar o programa para verificar se
  nada quebrou em qualquer alteração.
*/
