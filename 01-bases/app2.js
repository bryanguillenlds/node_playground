const fs = require("fs");

const data = fs.readFileSync("readme-sample.md", "utf-8");

const wordCount = data.split(" ");

//option 1
const vueWordCount = wordCount.filter(word => word.toLowerCase() === 'vue');

console.log('Word Count: ', wordCount.length);
console.log('Vue Word Count: ', vueWordCount.length);

//option 2
const vueWordCount2 = wordCount.filter(word => word.toLowerCase().includes('vue'));

console.log('Word Count: ', wordCount.length);
console.log('Vue Word Count 2: ', vueWordCount2.length);

//option 3
const vueWordCount3 = data.match(/vue/gi ?? []).length;

console.log('Word Count: ', wordCount.length);
console.log('Vue Word Count 3: ', vueWordCount3);