import { httpClientPlugin } from "../plugins/index.plugin";

const getPokemonById = async (id: number | string): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClientPlugin.get(url);
    return pokemon.name;
  } catch (error) {
    throw new Error(`Pokemon with id ${id} not found`);
  }
};

export { getPokemonById };
