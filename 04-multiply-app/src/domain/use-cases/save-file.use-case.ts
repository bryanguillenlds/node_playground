import { mkdirSync, writeFileSync } from "fs";

export interface SaveFileOptions {
  fileContent: string;
  filePath?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    filePath = "outputs",
    fileName = "table.txt",
  }: SaveFileOptions): boolean {
    try {
      mkdirSync(filePath, { recursive: true });
      writeFileSync(`${filePath}/${fileName}`, fileContent);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
