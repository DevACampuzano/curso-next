import { PokemosnGrid } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  //  description: '151 Pokémons',
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col p-2">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">estático</small>
      </span>
      <PokemosnGrid pokemons={[]} />
    </div>
  );
}
