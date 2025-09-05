import { getId, getAge } from '../plugins/index.plugin.js';

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getId(),
    birthdate: birthdate,
    name,
    age: getAge(birthdate),
  };
};

const personObject = {
  name: "John",
  birthdate: new Date("1990-01-01"),
};

export { buildPerson, personObject };