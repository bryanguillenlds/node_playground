const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { default: yargsPlugin } = await import("./args.plugin");

  return yargsPlugin;
};

describe("ArgsPlugin", () => {
  beforeEach(() => {
    // Reset process.argv before each test
    process.argv = process.argv.slice(0, 2); // Keep only node and script path
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
});
