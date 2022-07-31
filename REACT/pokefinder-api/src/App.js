import axios from "axios";

import { useEffect, useState } from "react";

function App() {
    const [pokemons, setPokemons] = useState([]);

    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const imageUrl =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    useEffect(() => {
        axios
            .get(baseUrl)
            .then((response) => {
                setPokemons(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {pokemons.map((pokemon, index) => (
                <div key={index}>
                    <span>{pokemon.name}</span>
                    <img
                        src={`${imageUrl}${index + 1}.png`}
                        alt={pokemon.name}
                    />
                </div>
            ))}
        </div>
    );
}

export { App };
