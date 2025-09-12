import { getPokemonById } from "../../src/js-bases/06-promises";

describe("06-promises", () => {
  const pokemonsList = [
    { id: 1, name: "bulbasaur" },
    { id: 2, name: "ivysaur" },
    { id: 3, name: "venusaur" },
  ];

  test("should return a pokemon name", async () => {
    const pokemon = await getPokemonById(1);
    expect(pokemon).toEqual(pokemonsList[0]?.name);
  });

  test("should return an error if the pokemon is not found", async () => {
    try {
      await getPokemonById(9999);
    } catch (error) {
      expect(error).toEqual(new Error("Pokemon with id 9999 not found"));
    }
  });
});
