let emailTemplate = `
  <h1>Hello {{name}}</h1>
  <p>Welcome to our website</p>
`;

const emailData = {
  name: "John Doe",
};

emailTemplate = emailTemplate.replace("{{name}}", emailData.name);

// module.exports = {
//   emailTemplate
// };

export { emailTemplate };