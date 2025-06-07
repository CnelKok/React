import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";

if (import.meta.env.PROD) {
	console.error = () => {};
	console.warn = () => {};
	console.info = () => {};
	console.debug = () => {};
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
