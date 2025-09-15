import { getId } from "../../src/plugins/get-id.plugin";

describe("get-id", () => {
  test("should return a string", () => {
    const uuid = getId();

    expect(typeof uuid).toBe("string");
    expect(uuid).toHaveLength(36);
  });
});
