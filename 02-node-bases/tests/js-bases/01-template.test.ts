import { emailTemplate } from "../../src/js-bases/01-template";

describe("01-template", () => {
  test("should contain a greeting", () => {
    expect(emailTemplate).toContain("Hello");
  });
});
