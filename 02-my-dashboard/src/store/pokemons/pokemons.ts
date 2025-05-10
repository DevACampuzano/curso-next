import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  favorite: { [key: string]: SimplePokemon };
}

// const getInicialState = (): PokemonState => {
//   const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");

//   return favorites;
// };

const initialState: PokemonState = {
  favorite: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorite = action.payload;
    },
    toggeleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const Pokemon = action.payload;
      const { id } = Pokemon;

      if (!!state.favorite[id]) {
        delete state.favorite[id];
        return;
      }
      state.favorite[id] = Pokemon;
    },
  },
});

export const { toggeleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
