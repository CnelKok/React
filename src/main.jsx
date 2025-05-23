import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import "./index.css";
import FallBack from "./pages/FallBack";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Suspense fallback={<FallBack />}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>
);
