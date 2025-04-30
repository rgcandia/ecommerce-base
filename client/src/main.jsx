import {
	RouterProvider,
} from "react-router-dom";
import router from "./router";
import React from "react";
import ReactDOM from "react-dom/client";

// redux 
import { Provider } from 'react-redux'
import {store} from './redux/store';


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
<Provider store={store}>
<RouterProvider router={router} />
</Provider>

);

