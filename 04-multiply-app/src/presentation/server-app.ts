import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  multiply: number;
  limit: number;
  show: boolean;
  name: string;
  destination: string;
}

export class ServerApp {
  // static so that you don't need to create an instance of the class to use the method
  static run({ multiply, limit, show, name, destination }: RunOptions) {
    console.log("Server running");

    const table = new CreateTable().execute({ multiply, limit });
    const fileCreated = new SaveFile().execute({
      fileContent: table,
      fileName: name,
      filePath: destination,
    });

    if (show) {
      console.log(table);
    }

    if (fileCreated) {
      console.log("File Created");
    } else {
      console.log("File not Created");
    }
  }
}
