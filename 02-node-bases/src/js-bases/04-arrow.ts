interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Jim", age: 22 },
];

const getUserByName = (
  name: string,
  callback: (error?: string, user?: User) => void
) => {
  const user = users.find((user) => user.name === name);

  if (!user) {
    return callback(`User ${name} not found`);
  } else {
    return callback(undefined, user);
  }
};

export { getUserByName };
