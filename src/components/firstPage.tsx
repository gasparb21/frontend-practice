import { useState, useEffect } from 'react';
import './firstPage.css'

export default function FirstPage() {

    const url = 'http://localhost:3000/pokemons';

    type Pokemon = {
        name: string;
        type: string;
    };
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);


    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await fetch(url)

                if(!response.ok){
                    throw new Error('Error al obtener pokemons')
                }

                const resultado = await response.json();
                setPokemonList(resultado);
                console.log(resultado)
            } catch (err) {
                console.log(err)
            }
        };

        getPokemon();
    },[])

  return (
    <div>
        <h1>Welcome to the First Page of Pokemon</h1>
        <ul className='pokemon-list'>
            {pokemonList.map((pokemon, index) => {
                return(
                    <>
                        <li key={index}>{pokemon.name} {pokemon.type}</li>
                    </>
                )
            })}
        </ul>
    </div>
  )
}
