import express from 'express';
import clients from './src/controller/clients.js';

const routes = express.Router();

routes.get('/clients', clients.findAll);
routes.post('/clients', clients.addClient);
routes.get('/clients/:id', clients.findClient); // put e patch
routes.put('/clients/:id', clients.updateClient);
routes.delete('/clients/:id', clients.deleteClient);

export { routes as default };
