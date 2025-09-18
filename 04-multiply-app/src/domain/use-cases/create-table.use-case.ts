export interface CreateTableOptions {
  multiply: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ multiply, limit = 10 }: CreateTableOptions): string {
    let output = "";

    for (let i = 1; i <= limit; i++) {
      output += `${multiply} x ${i} = ${multiply * i}\n`;
    }

    return output;
  }
}
