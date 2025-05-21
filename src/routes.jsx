import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				lazy: async () => {
					const module = await import("./pages/Home");
					return { Component: module.default };
				},
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
