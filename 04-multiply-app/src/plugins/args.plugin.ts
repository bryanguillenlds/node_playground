// ADAPTER FOR YARGS OR OTHER LIBRARIES FOR COMMAND LINE ARGUMENTS
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const yargsPlugin = yargs(hideBin(process.argv))
  .option("m", {
    alias: "multiply",
    type: "number",
    demandOption: true,
    describe: "The number to multiply",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    demandOption: false,
    describe: "The limit of the table",
    default: 10,
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    demandOption: false,
    describe: "Show the table in the console",
    default: false,
  })
  .option("n", {
    alias: "name",
    type: "string",
    demandOption: false,
    describe: "The name of the file",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    demandOption: false,
    describe: "The destination of the file",
  })
  .check((argv: any) => {
    if (argv.multiply < 1) {
      throw new Error("The number to multiply must be greater than 0");
    }
    if (argv.limit < 1 || argv.limit > 16) {
      throw new Error("The limit must be between 1 and 16");
    }
    if (!argv.name.includes(".txt")) {
      throw new Error("The name of the file must end with .txt");
    }
    return true;
  })
  .parseSync();

// Export only the serializable properties
export default {
  multiply: yargsPlugin.multiply,
  limit: yargsPlugin.limit,
  show: yargsPlugin.show,
  name: yargsPlugin.name,
  destination: yargsPlugin.destination,
};
