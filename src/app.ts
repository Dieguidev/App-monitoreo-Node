import { Server } from "./presentation/server";

//*funcion autoinvocada
(() => {
  main();
})();


function main() {
  Server.start();
}
