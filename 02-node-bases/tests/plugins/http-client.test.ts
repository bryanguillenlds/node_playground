import { httpClientPlugin } from "../../src/plugins/index.plugin";

describe("http-client", () => {
  test("should return data in the expected format", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    expect(data).toEqual({
      id: 1,
      title: "delectus aut autem",
      completed: false,
      userId: 1,
    });
  });
});
