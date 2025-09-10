import { httpClientPlugin } from "../plugins/index.plugin.js";

const getPokemonById = async (id: number | string): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClientPlugin.get(url);
  return pokemon.name;
};

export { getPokemonById };
