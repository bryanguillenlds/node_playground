// const { emailTemplate } = require("./js-bases/01-template");
import { emailTemplate } from "./js-bases/01-template.js";
import { SHELL, NVM_DIR } from "./js-bases/02-destructuring.js";
import { getUserByName } from "./js-bases/03-callbacks.js";
import { buildPerson, personObject } from "./js-bases/05-factory-functions.js";
// console.log(emailTemplate);
// console.log(SHELL, NVM_DIR);
getUserByName("John",  (error, user) => {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});

console.log(buildPerson(personObject));