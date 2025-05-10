"use client";
import Link from "next/link";
import { SimplePokemon } from "../interface/simple-pokemons";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggeleFavorite } from "@/store/pokemons/pokemons";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFeborite = useAppSelector((state) => !!state.pokemons.favorite[id]);

  const dispatch = useAppDispatch();

  const OnToggele = () => {
    dispatch(toggeleFavorite(pokemon));
  };
  // const isFeborite = useAppSelector((state) => state.pokemons[id]);
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b ">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>

          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name.toLocaleLowerCase()}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Ver más
            </Link>
          </div>
        </div>

        <div
          //href="/dashboard/main"
          onClick={OnToggele}
          className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
        >
          <div className="text-red-600">
            {isFeborite ? <IoHeart /> : <IoHeartOutline />}
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              {isFeborite ? "Es Favorito" : "No es Favorito"}
            </p>
            <p className="text-xs text-gray-500">Click para cambiar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
