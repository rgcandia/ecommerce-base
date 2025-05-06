import server  from "./server.js";

const PORT = 4002;
server.listen(PORT,()=>{
    console.log("Servidor escuchando en el puerto "+PORT);
});