import db from "../db.js"; // Importa la conexión principal de Sequelize
const { User } = db;       // Extrae el modelo User

// Función para verificar si un usuario existe por email
async function verificarUsuario({ email }) {
  if (!email) throw new Error("Email no proporcionado");

  try {
    const usuario = await User.findOne({ where: { email } });
     console.log("el usuario encontrado es = "+usuario);
    return usuario; // Devuelve el usuario o null
   
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    throw error;
  }
}
async function crearUsuario({ name, email, type = null }) {
  if (!email || !name) {
    throw new Error("Nombre y email son requeridos");
  }

  try {
    const existente = await User.findOne({ where: { email } });

    if (existente) {
      console.log('Ya existe un usuario con ese email');
      return null;
    }

    const nuevoUsuario = await User.create({
      name,
      email,
      type,        // Puede ser null
      validated: false
    });

    console.log("Usuario creado:", nuevoUsuario.toJSON());
    return nuevoUsuario;

  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}


// Exporta como parte de un objeto hooks
const hooks = {
  verificarUsuario,
  crearUsuario
};

export default hooks;


