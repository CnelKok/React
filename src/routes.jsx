import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "career",
				lazy: async () => {
					const module = await import("./pages/Career");
					return { Component: module.default };
				},
			},
			{
				path: "trekmatics",
				lazy: async () => {
					const module = await import("./pages/Trekmatics");
					return { Component: module.default };
				},
			},
			{
				path: "contacts",
				lazy: async () => {
					const module = await import("./pages/Contacts");
					return { Component: module.default };
				},
			},
		],
	},
]);

export default router;
