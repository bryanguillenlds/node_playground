import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  test("should create table with default values", () => {
    const table = new CreateTable();

    const createdTable = table.execute({ multiply: 2 });

    const rows = createdTable.split("\n").length;

    expect(table).toBeInstanceOf(CreateTable);

    expect(rows).toBe(11); // 1 more row than limit because of extra /n at the end
  });

  test("should create table with custom values", () => {
    const options = {
      multiply: 3,
      limit: 5,
    };
    const table = new CreateTable();

    const createdTable = table.execute(options);

    const rows = createdTable.split("\n").length;

    expect(rows).toBe(options.limit + 1); // 1 more row than limit because of extra /n at the end
  });
});
