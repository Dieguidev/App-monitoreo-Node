
import { envs } from "./config/plugins/envs.plugins";
import { Server } from "./presentation/server";

//*funcion autoinvocada
(() => {
  main();
})();


function main() {
  Server.start();
  // console.log(envs.PORT);

}
