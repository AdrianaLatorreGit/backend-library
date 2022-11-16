const express = require("express");
// ! Gerar id randomico
const { randomUUID } = require("crypto");

const app = express();
app.use(express.json());

const port = 3030;

//! Super herois array
let superheroes = [];

// ! Create
app.post("/superheroes", (request, response) => {
    const { name, alias } = request.body;
    const superheroe = {
        id: randomUUID(),
        name,
        alias,
    };
    superheroes.push(superheroe);
    return response.status(201).json(superheroe);
});

// ! Read
app.get("/superheroes", (request, response) => {
    return response.json(superheroes);
});

//! Update
app.put("/superheroes/:id", (request, response) => {
    const { id } = request.params;
    const { name, alias } = request.body;

    let indexSuperhero = superheroes.findIndex(
        (superheroe) => superheroe.id === id
    );
    // const superheroUpdate = {
    //     id,
    //     name,
    //     alias,
    // };
    // superheroes[indexSuperhero] = superheroUpdate;
    // return response.json(superheroUpdate);
    // !Outra maneira de fazer, com spread operator

    superheroes[indexSuperhero] = {
        ...superheroes[indexSuperhero],
        name,
        alias,
    };

    return response.json(superheroes[indexSuperhero]);
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

//! Delete

app.delete("/superheroes/:id", (request, response) => {
    const { id } = request.params;

    let indexSuperhero = superheroes.findIndex(
        (superheroe) => superheroe.id === id
    );

    superheroes.splice(indexSuperhero, 1);
    return response.status(204).send();
});
