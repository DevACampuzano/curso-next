"use client";
import { useAppSelector } from "@/store";
import { SimplePokemon } from "../interface/simple-pokemons";
import { PokemonCard } from "./PokemonCard";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemons: SimplePokemon[];
  favorite?: boolean;
}

export const PokemosnGrid = ({ pokemons, favorite }: Props) => {
  const pokemonsStore = useAppSelector((state) => state.pokemons.favorite);
  const pokemonsArray = Object.values(pokemonsStore);

  if (favorite && pokemonsArray.length === 0) {
    return <NotFavorite />;
  }

  return (
    <div className=" flex flex-wrap gap-10 items-center justify-center">
      {favorite
        ? pokemonsArray.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        : pokemons.map(
            (pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />
            // <span key={pokemon.id}>adsfasdf</span>
          )}
    </div>
  );
};

export const NotFavorite = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  );
};
