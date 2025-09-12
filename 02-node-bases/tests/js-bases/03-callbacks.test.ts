import { getUserByName } from "../../src/js-bases/03-callbacks";

describe("03-callbacks", () => {
  const users = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Jim", age: 22 },
  ];

  test("should return an error string if the user is not found", () => {
    expect(
      getUserByName("Jake", (error, user) => {
        expect(error).toBe("User Jake not found");
        expect(user).toBeUndefined();
      })
    );
  });

  test("should return a user if the user is found", () => {
    expect(
      getUserByName("John", (error, user) => {
        expect(error).toBeUndefined();
        expect(user).toEqual(users[0]);
      })
    );
  });
});
