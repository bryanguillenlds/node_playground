// import { getId, getAge } from '../plugins/index.plugin.js';

/**
 * Factory Function with Dependency Injection Pattern
 *
 * This is a higher-order function that creates a specialized person-maker function.
 * It follows the Factory Pattern by encapsulating object creation logic and the
 * Dependency Injection pattern by accepting dependencies as parameters.
 */
const buildMakePerson = ({getUUID, getAge}) => {
  // Return a new function that has the dependencies "baked in"
  // This is called "partial application" - we're creating a specialized version
  // of a more general function by pre-filling some of its parameters
  return ({ name, birthdate }) => {
    // Return a person object using the injected dependencies
    // This is the actual person creation logic that gets executed
    // when the returned function is called
    return {
      id: getUUID(),           // Use injected ID generation function
      birthdate: birthdate,    // Pass through the birthdate
      name,                    // Shorthand for name: name
      age: getAge(birthdate),  // Use injected age calculation function
    };
  }
};

// Export the factory function for use in other modules
export { buildMakePerson };