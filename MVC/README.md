##EJS
Passo a passo

-   [x] Iniciar projeto (npm init -y)
        -Instalar dependencias
-   [x] Express (npm install express -y)
-   [x] nodemon (npm install nodemon -D)
-   [x] ejs (npm install ejs)
-   [x] Criar o .gitignore e passar a pasta \*node_modules/
-   [x] Na raiz do projeto criar o arquivo app.js

## /📂

app.js

-   [x] importar módulo do Express
        -const express = require('express')
-   [x] chamar uma aplicação Express, que é uma funcãoe armazená-la em uma variável
        -const app = express()
-   [x] criar uma porta específica para nosso servidor
        const port = port
        quando subirmos a nossa aplicação, não devemos deixar uma porta estática. A porta usada será aquela que estiver disponível no ambiente que fizermos o nosso deploy.
        const port = process.env.PORT || 3000
-   [x] Nosso servidor precisa ficar 'ouvindo' conexões. Será passa a porta que especificamos acima.
-   [x] app.listen(port)
-   [x] podemos passar uma função callback e imprimir uma mensagem no nosso terminal para testarmos se nossa conexão deu certo
        app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port} 🙃`);
        });

## /📂

package.json

-[ ] Criar nosso script 'start' para rodar o nodemon
"start" : "nodemon app.js" 
-[ ] No terminal rodar o comando 'npm start'

##### Arquitetura MVC

-   [x] Na raiz do projeto, criar uma pasta chamada 'models/'
-   [x] Na raiz do projeto, criar uma pasta chamada 'views/'
-   [x] Na raiz do projeto, criar uma pasta chamada 'controlles/'
-   [x] Na raiz do projeto, criar uma pasta chamada 'routes/'
-   [x] Na raiz do projeto, criar uma pasta chamada 'public/'
-   [x] Na raiz do projeto, criar uma pasta chamada 'database/'

## EJS

-   Arquivo JavaScript dentro do HTML

## views/ 📂

-   [x] Criar uma pasta chamada partials 
- [x] Criar um arquivo chamado 'index.js'

### index.ejs

-   [x] iniciar uma estrutura básica em HTML

### EJS

-   back-end será o responsável pela exibição da página.

## / 📂

### app.js

-   [x] Setar configurações
-   app.set('view engine', 'ejs)
    -Informar ao express que iremos usar uma 'view engine' para renderizar nossas páginas HTML e que faremos uso da extensão .ejs
-   [x] Criar uma rota do tipo GET e enviar como resposta nossa página index
        app.get('/',(request, response)=>{
        return response.render('index')
        })

## EJS

-Por padrão o EJS irá procurar o diretório 'views/'. Caso este esteja dentro de uma outra pasta, será necessário informar o novo caminho.
-Ao pedirmos que nossa página seja renderizada, não é necessário informar a extensão .ejs, porque já setamos que iríamos trabalhar com esse tipo de arquivo.

-   return response.render('nomeDoArquivo')

### Navegador

-   [x] No navegador, acessar o endereço http://localhost:3000

## / 📂

### app.js

-   [x] Importar o módulo nativo 'path'
        -const path = require('path')
-   [x] Informar que iremos servir/usar arquivos estáticos, informando a pasta que estarão armazenados
-   app.use(express.static(path.join(\_\_dirname, "public")));

## public/ 📂

-   [x] Criar uma pasta "styles/"
-   [x] Criar uma pasta "scripts/"
-   [x] Criar uma pasta "images/"

## public/styles/ 📂

-   [x] Criar um arquivo "style.css"

## views/ 📂

-   [x] Linkar nosso "style.css"
-   [x] Linkar nosso "main.js" (criar dentro do scripts, js do front)

## public/styles/ 📂

## style.css

-   [x] Alterar teste no css

## public/cripts/ 📂

## main.js

para teste
- [x] Criar um console.log('Javascript)

## navegador

-   [x] Abrir devtools 