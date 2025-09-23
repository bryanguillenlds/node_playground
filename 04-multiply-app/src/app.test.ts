import { ServerApp } from "./presentation/server-app";

describe("App", () => {
  test("should call run with options", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = [
      "node",
      "src/app.ts",
      "-m",
      "10",
      "-l",
      "10",
      "-s",
      "true",
      "-n",
      "table.txt",
      "-d",
      "outputs",
    ];

    await import("./app");

    expect(serverRunMock).toHaveBeenCalledTimes(1);
    expect(serverRunMock).toHaveBeenCalledWith({
      multiply: 10,
      limit: 10,
      show: true,
      name: "table.txt",
      destination: "outputs",
    });
  });
});
