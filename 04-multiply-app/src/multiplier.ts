import { writeFileSync, mkdirSync } from "fs";
import yargsPlugin from "./plugins/args.plugin";

//gran the argument from the command line -> [2] is alwatys the argument after the script name
const multiply = Number(yargsPlugin.multiply);
const limit = Number(yargsPlugin.limit);
const show = yargsPlugin.show;

const header = `
  =========================================
  |                                       |
  |     ${multiply} Table Multiplier      |
  |                                       |
  =========================================
`;

const template = (multiply: number): string => {
  let output = header + "\n";
  for (let i = 1; i <= limit; i++) {
    output += `${multiply} x ${i} = ${multiply * i}\n`;
  }
  return output;
};

const outputPath = `outputs`;

if (show) {
  console.log(template(multiply));
}

mkdirSync(outputPath, { recursive: true });
writeFileSync(`${outputPath}/output-${multiply}-table.txt`, template(multiply));
console.log("File Created");
