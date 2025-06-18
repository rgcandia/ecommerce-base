import server from "./server.js";
import {conn} from "./db.js"
const PORT = process.env.PORT || 4001;
conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});
});