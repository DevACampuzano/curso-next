import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type === "pokemons/toggeleFavorite") {
      const { pokemons } = state.getState() as RootState;
      const favorites = JSON.stringify(pokemons);
      localStorage.setItem("favorites", favorites);
    }
  };
};
