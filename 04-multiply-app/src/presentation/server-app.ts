interface RunOptions {
  multiply: number;
  limit: number;
  show: boolean;
}

export class ServerApp {
  // static so that you don't need to create an instance of the class to use the method
  static run(options: RunOptions) {
    console.log("Server running");
    console.log({ options });
  }
}
