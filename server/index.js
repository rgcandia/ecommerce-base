import server  from "./server.js";

const PORT = 4001;
server.listen(PORT,()=>{
    console.log("Servidor escuchando en el puerto "+PORT);
});