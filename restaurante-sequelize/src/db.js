import { Sequelize } from 'sequelize'; // Importando o Sequelize, o ponto de entrada
import dotenv from 'dotenv/config'; // Importando o arquivo dotenv para encontrar as informações do nosso banco

// Carregando os dados do .env para o nosso arquivo de configuração
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_ROOT_PASSWORD;
const dbHost = process.env.DB_HOST;

// Definindo as configurações do nosso sequelize (ajudante)
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
});

export default sequelize;
