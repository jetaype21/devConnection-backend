import dotenv from "dotenv";
import server from "./src/server/index.js";
import { logError, logSuccess } from "./src/utils/index.js";

dotenv.config();

const puerto = process.env.PORT || 8080;

server.listen(puerto, () => {
  logSuccess(`La aplicacion esta corriendo en el puerto ${puerto}`);
});

// controlar error de servidor
server.on("error", (error) => {
  logError(`${error}`);
});
