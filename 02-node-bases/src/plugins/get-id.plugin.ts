import { v4 as uuidv4 } from "uuid";

const getId = (): string => {
  return uuidv4();
};

export { getId };
