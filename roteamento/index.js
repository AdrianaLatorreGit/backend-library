//Creating Server
const http = require("http");
const port = process.env.PORT || 3030;

//Mudando o roteamento básico
const server = http.createServer((request, response) => {
  const { url } = request;
  if (url == "/") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    response.end("Olá, Frida!");
  } else if (url == "/html") {
    response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    response.end("<h1> Olá, arrasei!</h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    response.end("Página não encontrada");
  }
});

server.listen(port, () => {
  console.log(`Servidor está rodando na minha porta ${port}`);
});
