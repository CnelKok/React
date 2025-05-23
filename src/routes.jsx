import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Career = React.lazy(() => import("./pages/Career"));
const Trekmatics = React.lazy(() => import("./pages/Trekmatics"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
const Error404 = React.lazy(() => import("./pages/Error404"));

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
				element: <Career />,
			},
			{
				path: "trekmatics",
				element: <Trekmatics />,
			},
			{
				path: "contacts",
				element: <Contacts />,
			},
			{ path: "*", element: <Error404 /> },
		],
	},
]);

export default router;
