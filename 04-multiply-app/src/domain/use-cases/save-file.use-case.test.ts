import { SaveFile } from "./save-file.use-case";
import * as fs from "fs";

describe("SaveFileUseCase", () => {
  const customOptions = {
    fileContent:
      "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10",
    filePath: "test-outputs",
    fileName: "test-table",
  };

  const customFilePath =
    customOptions.filePath + "/" + customOptions.fileName + ".txt";

  afterEach(() => {
    const outputFolderExists = fs.existsSync("outputs");
    if (outputFolderExists) {
      fs.rmSync("outputs", { recursive: true });
    }

    const testOutputFolderExists = fs.existsSync("test-outputs");
    if (testOutputFolderExists) {
      fs.rmSync("test-outputs", { recursive: true });
    }
  });

  test("should save file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";

    const fileContent =
      "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10";

    const fileCreated = saveFile.execute({
      fileContent,
    });

    expect(fileCreated).toBe(true);
    expect(fs.existsSync(filePath)).toBe(true);
    expect(fs.readFileSync(filePath, "utf-8")).toBe(fileContent);
  });

  test("should save file with custom values", () => {
    const saveFile = new SaveFile();

    const fileCreated = saveFile.execute({
      fileContent: customOptions.fileContent,
      filePath: customOptions.filePath,
      fileName: customOptions.fileName + ".txt",
    });

    expect(fileCreated).toBe(true);
    expect(fs.existsSync(customFilePath)).toBe(true);
    expect(fs.readFileSync(customFilePath, "utf-8")).toBe(
      customOptions.fileContent
    );
  });

  test("should return false and error if directory creation fails", () => {
    const saveFile = new SaveFile();

    //mock implementations persists after the test, so we need to restore it
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("Error creating directory");
    });

    const fileCreated = saveFile.execute({
      fileContent: customOptions.fileContent,
      filePath: customOptions.filePath,
      fileName: customOptions.fileName + ".txt",
    });

    expect(fileCreated).toBe(false);

    mkdirSpy.mockRestore();
  });

  test("should return false and error if file creation fails", () => {
    const saveFile = new SaveFile();

    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("Error creating file");
      });

    const fileCreated = saveFile.execute({
      fileContent: customOptions.fileContent,
      filePath: customOptions.filePath,
      fileName: customOptions.fileName + ".txt",
    });

    expect(fileCreated).toBe(false);

    writeFileSpy.mockRestore();
  });
});
