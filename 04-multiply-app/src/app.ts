import { ServerApp } from "./presentation/server-app";
import yargsPlugin from "./plugins/args.plugin";

(async () => {
  await main();
})();

async function main() {
  // console.log({ yargsPlugin });
  const { multiply, limit, show } = yargsPlugin;

  ServerApp.run({
    multiply,
    limit,
    show,
  });
}
