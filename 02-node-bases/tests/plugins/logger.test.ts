import { buildLogger, loggerPlugin } from "../../src/plugins/index.plugin";

describe("logger", () => {
  test("should return a logger function", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const logger = buildLogger("test");
    const logSpy = jest.spyOn(loggerPlugin, "log");

    logger.log("test message");

    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        level: "info",
        message: "test message",
        service: "test",
      })
    );
  });
});
