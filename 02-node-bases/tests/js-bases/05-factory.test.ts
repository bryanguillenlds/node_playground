import { buildMakePerson } from "../../src/js-bases/05-factory-functions";

describe("05-factory", () => {
  const getUUID = () => "123";
  const getAge = () => 20;

  test("should return a function", () => {
    const makePerson = buildMakePerson({
      getUUID,
      getAge,
    });

    expect(makePerson).toBeInstanceOf(Function);
  });

  test("should return a person object", () => {
    const makePerson = buildMakePerson({
      getUUID,
      getAge,
    });

    const person = makePerson({ name: "John", birthdate: "1990-01-01" });

    expect(person).toEqual({
      id: "123",
      birthdate: "1990-01-01",
      name: "John",
      age: 20,
    });
  });
});
