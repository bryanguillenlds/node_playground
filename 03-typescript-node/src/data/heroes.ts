interface Hero {
  id: number;
  name: string;
  owner: string;
}

const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Superman",
    owner: "DC",
  },
];

export { heroes, type Hero };
