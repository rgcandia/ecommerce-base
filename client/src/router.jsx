import {
	createBrowserRouter,
} from "react-router-dom";
// Importar Componentes 
import App from "./App";
const router = createBrowserRouter([
	{
		path:"/",
		element:<App/>
	},
]);
export default router;