const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Jim", age: 22 },
];

function getUserByName (name, callback) {
  const user = users.find((user) => user.name === name);

  if (!user) {
    return callback(`User ${name} not found`);
  } else {
    return callback(null, user);
  }
};

export { getUserByName };