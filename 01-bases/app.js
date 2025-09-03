const fs = require("fs");

const data = fs.readFileSync("readme-sample.md", "utf-8");

const newData = data.replace(/React/ig, "Vue");

fs.writeFileSync("readme-sample-vue.md", newData);

console.log(newData);