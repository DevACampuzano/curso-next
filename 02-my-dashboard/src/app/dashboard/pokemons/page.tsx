import { PokemonsResponse, PokemosnGrid, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "151 Pokémons",
  //  description: '151 Pokémons',
};

export const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  //   throw new Error("Error al cargar los pokemones");

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col p-2">
      <span className="text-5xl my-2">
        Listado de Pokémons <small className="text-blue-500">estático</small>
      </span>
      <PokemosnGrid pokemons={pokemons} />
    </div>
  );
}
