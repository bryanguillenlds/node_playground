const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { default: yargsPlugin } = await import("./args.plugin");

  return yargsPlugin;
};

describe("ArgsPlugin", () => {
  beforeEach(() => {
    // Reset the modules because it was cached from the previous test when runcommand executed
    jest.resetModules();
    // Reset process.argv before each test, otherwise it will keep the previous test arguments
    process.argv = process.argv.slice(0, 2);
  });

  test("should return the correct arguments", async () => {
    const argv = await runCommand([
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
    ]);

    expect(argv).toEqual({
      multiply: 10,
      limit: 10,
      show: true,
      name: "table.txt",
      destination: "outputs",
    });
  });

  test("should return config with custom options", async () => {
    const argv = await runCommand([
      "-m",
      "3",
      "-l",
      "15",
      "-n",
      "table-custom.txt",
      "-d",
      "outputs-custom",
    ]);

    expect(argv).toEqual({
      multiply: 3,
      limit: 15,
      show: false,
      name: "table-custom.txt",
      destination: "outputs-custom",
    });
  });
});
