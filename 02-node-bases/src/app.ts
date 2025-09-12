// const { emailTemplate } = require("./js-bases/01-template");
// import { emailTemplate } from "./js-bases/01-template";
// import { SHELL, NVM_DIR } from "./js-bases/02-destructuring";
// import { getUserByName } from "./js-bases/03-callbacks";
// import { getId } from "./plugins/index.plugin";
// import { buildMakePerson } from "./js-bases/05-factory-functions";
// import { getPokemonById } from "./js-bases/06-promises";
// import { buildLogger } from "./plugins/index.plugin";
// console.log(emailTemplate);
// console.log(SHELL, NVM_DIR);
// getUserByName("John",  (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });

/**
 * DEPENDENCY INJECTION: Injecting the actual implementations into the factory
 *
 * buildMakePerson is a factory function that expects dependencies as parameters.
 * Here we're injecting the real implementations (getId, getAge) that will be
 * "baked into" the returned makePerson function.
 */
// const makePerson = buildMakePerson({
//   getUUID: getId,    // Inject the ID generation function
//   getAge    // Inject the age calculation function
// });

/**
 * PERSON DATA: The data that will be passed to the created makePerson function
 *
 * This object contains the raw person data that makePerson expects.
 * Notice how this is different from what buildMakePerson accepts - this is
 * the data for the person, not the dependencies for the factory.
 */
// const personObject = {
//   name: "John",
//   birthdate: new Date("1990-01-01"),
// };

/**
 * FACTORY PATTERN IN ACTION: Using the created function
 *
 * makePerson is the specialized function returned by buildMakePerson.
 * It has the dependencies (getId, getAge) already "baked in" and is ready
 * to create person objects from raw person data.
 */
// console.log(makePerson(personObject));

// const pokemon = await getPokemonById(1)
// console.log(pokemon);

// const logger = buildLogger("app");
// logger.log("Hello, world!");
// logger.error("Error, world!");
