import { SimplePokemon } from "../interface/simple-pokemons";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemosnGrid = ({ pokemons }: Props) => {
  return (
    <div className=" flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(
        (pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        )
        // <span key={pokemon.id}>adsfasdf</span>
      )}
    </div>
  );
};
