

import { envs } from "./config/plugins/envs.plugins";
import { LogModel, MongoDataBase } from "./data/mongo";
import { Server } from "./presentation/server";

//*funcion autoinvocada
(() => {
  main();
})();


async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // //Crear una coleccion
  // const newLog = await LogModel.create({
  //   message: 'Test message desde mongo',
  //   origin: 'App.ts',
  //   level: 'low',
  // })

  // await newLog.save();

  // console.log(newLog);

  // const logs = await LogModel.find();
  // console.log(logs);


  // Server.start();
}
