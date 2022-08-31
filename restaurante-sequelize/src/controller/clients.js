import ClientRepository from '../models/clientsModel.js';

async function findAll(req, res) {
  const clients = await ClientRepository.findAll(); // Find all significa encontrar tudo o que existir nessa tabela do banco
  res.json(clients);
}

async function addClient(req, res) {
  await ClientRepository.create({
    name: req.body.name,
    birth: req.body.birth,
    phone: req.body.phone,
    email: req.body.email,
  }).then((result) => res.json(result));
}

async function findClient(req, res) {
  await ClientRepository.findByPk(req.params.id).then((result) =>
    res.json(result)
  );
}

async function updateClient(req, res) {
  await ClientRepository.update(
    {
      name: req.body.name,
      birth: req.body.birth,
      phone: req.body.phone,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  await ClientRepository.findByPk(req.params.id).then((result) =>
    res.json(result)
  );
}

async function deleteClient(req, res) {
  await ClientRepository.destroy({
    where: {
      id: req.params.id,
    },
  });
  await ClientRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addClient, findClient, updateClient, deleteClient };
