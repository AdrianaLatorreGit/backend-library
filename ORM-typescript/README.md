Mapeamento de objeto relacional

npm i mysql

tsc --init
tsc -w

aponta os caminhos no tsconfig.json
"rootDir": "./src/",
"outDir": "./dist/",

"start" : "tsc --project ./tsconfig.json & node ./dist/index.js"
