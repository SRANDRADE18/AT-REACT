import './pokemon.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import pika from './logoPokedex 1.png'
import axios from 'axios';

export default function Pokemon(){

    const [pokemon, setPokemon] = useState([]);

    async function buscarPokemons(limit){
        let url = `https://pokeapi.co/api/v2/pokemon?limit=8{limit}`;

        let response = await axios.get(url);

        let listaPokemon=[];

        for (let item of response.data.results){

            let pokemonResp = await axios.get(item.url);

            let Imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

            let tipos='';

            for (let t of pokemonResp.data.types){
                if (t.type && t.type.name) {
                    tipos += t.type.name +'';
                }
            }

            let isShiny = Math.random() < 0.2;
            
            listaPokemon.push({
                nome: item.name,
                Imagem: Imagem,
                tipos: tipos,
                shiny: isShiny
            })  
            
        }
        setPokemon(listaPokemon);
    }

    async function buscarPokemonsMais(limit){
        let url = `https://pokeapi.co/api/v2/pokemon?limit=200{limit}`;

        let response = await axios.get(url);

        let listaPokemon=[];

        for (let item of response.data.results){

            let pokemonResp = await axios.get(item.url);

            let Imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

            let tipos='';

            for (let t of pokemonResp.data.types){
                if (t.type && t.type.name) {
                    tipos += t.type.name +'';
                }

            }

            let isShiny = Math.random() < 0.2;

            listaPokemon.push({
                nome: item.name,
                Imagem: Imagem,
                tipos: tipos,
                shiny: isShiny
            })  
            
        }
        setPokemon(listaPokemon);
    }
  
    return (
        <div className='pagina-pokemon'>

            <section>

               <header>
                 <img src={pika}/>
                 <button onClick={buscarPokemons}> buscar </button>
               </header>

               <div className='pokemon'>
                {pokemon.map(item=>
                    <div className='pokemon-lista'>
                        <img src={item.Imagem}/>
                        <h1>{item.nome}</h1>
                        <p>{item.tipos}</p>
                   </div>
                        
                    )}

                   <button onClick={buscarPokemonsMais}> buscar mais</button>
               </div>

            </section>


  

        </div>
      )
    


}
