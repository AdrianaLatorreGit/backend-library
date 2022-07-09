const baseUrl = "https://nodejs-deploy-api-heroku.herokuapp.com/games/";
const container = document.querySelector(".container");

const btn = document.getElementById("btn");

btn.addEventListener("click", generateHerois);

async function showHerois() {
    const response = await fetch(baseUrl);
    const parseResponse = await response.json();
    return parseResponse;
}

async function generateHerois() {
    const cards = await showHerois();

    cards.forEach((card) => {
        container.innerHTML += `
        <div class="card">
        <p>ID:${card._id}</p>
        <p>NOME: ${card.title}</p>
        <p>DESCRIÇÃO: ${card.description}</p>
        <p>DATA DE LANÇAMENTO: ${card.release_date}</p>
    </div>
        
        `;
    });
}
