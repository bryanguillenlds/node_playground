import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe("ServerApp", () => {
  const options = {
    multiply: 2,
    limit: 7,
    show: false,
    name: "table-test.txt",
    destination: "outputs-test",
  };

  test("should create server app instance", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("should run server app with spies", () => {
    const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");

    ServerApp.run(options);

    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({
      multiply: options.multiply,
      limit: options.limit,
    });

    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileName: options.name,
      filePath: options.destination,
    });
  });

  test("should run server app with mocked functions", () => {
    const createTableMock = jest.fn().mockReturnValue("1 x 2 = 2");
    const saveFileMock = jest.fn();

    CreateTable.prototype.execute = createTableMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(createTableMock).toHaveBeenCalledTimes(1);
    expect(createTableMock).toHaveBeenCalledWith({
      multiply: options.multiply,
      limit: options.limit,
    });

    expect(saveFileMock).toHaveBeenCalledTimes(1);
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: "1 x 2 = 2",
      fileName: options.name,
      filePath: options.destination,
    });
  });
});
