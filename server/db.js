import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import pg from 'pg';
import { fileURLToPath, pathToFileURL } from 'url'; // 👈 agregado pathToFileURL

dotenv.config();

// Necesario para __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const modelDefiners = [];

const {
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_USER
} = process.env;

const sequelize = new Sequelize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Leemos todos los archivos de la carpeta Models, los importamos dinámicamente
const modelsPath = path.join(__dirname, '/models');

const files = fs.readdirSync(modelsPath)
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js');

for (const file of files) {
  const fileUrl = pathToFileURL(path.join(modelsPath, file)).href; // 👈 clave
  const module = await import(fileUrl);
  modelDefiners.push(module.default);
}

// Injectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([name, model]) => [
  name[0].toUpperCase() + name.slice(1),
  model
]);
sequelize.models = Object.fromEntries(capsEntries);

export const conn = sequelize;
export default {
  ...sequelize.models,
  conn
};
