import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import "./styles/normalize.css";
import "./styles/variables.css";
import "./styles/fonts.css";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
