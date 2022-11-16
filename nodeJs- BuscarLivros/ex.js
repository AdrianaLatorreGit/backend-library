const superHerois = [];

const spiderMan = {
    id: 1,
    nome: "Peter Parker",
    identidade: "Homen-aranha",
    editora: "Marvel",
};
const batman = {
    id: 2,
    nome: "Bruce Wayne",
    identidade: "Batman",
    editora: "DC",
};
const superMan = {
    id: 3,
    nome: "Clark Kent",
    identidade: "SuperMan",
    editora: "Marvel",
};

superHerois.push(spiderMan);
superHerois.push(batman);
superHerois.push(superMan);

// console.log(superHerois)

// const buscarSuperHeroiId = (id) => {
//     const superHeroi = superHerois.find((superHeroi) => superHeroi.id === id);
//     return superHeroi
// };

// buscarSuperHeroiId(3);

// const alterarInfoSuperheroi = (id, editora) => {
//     const superHeroi = superHerois.find((superHeroi) => superHeroi.id === id);
//     superHeroi.editora = editora;
// };
// alterarInfoSuperheroi(3, "DC");

// console.log(superHerois)

// Deletar super herois
// findindex nos retonrna um número
const deletarSuperHeroi = (id) => {
    // busca pelo ID
    // const superHeroi = superHerois.find((superHeroi) => superHeroi.id ===id);
    // acha os diferentes do ID pedido
    // const superHeroi = superHerois.filter((superHeroi) => superHeroi.id !== id);
    const indexsuperHeroi = superHerois.findIndex(
        (superHeroi) => superHeroi.id === id
    );
    superHerois.splice(indexsuperHeroi, 1);
};
deletarSuperHeroi(1);
