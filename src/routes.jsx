import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Vacancy from "./pages/Vacancy";

const Home = React.lazy(() => import("./pages/Home"));
const Career = React.lazy(() => import("./pages/Career"));
const Trekmatics = React.lazy(() => import("./pages/Trekmatics"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
const Error404 = React.lazy(() => import("./pages/Error404"));
const News = React.lazy(() => import("./pages/News"));

const router = createBrowserRouter([
	{
		path: "/React",
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
			{ path: "vacancy/:vacancy_id", element: <Vacancy /> },
			{ path: "news/:news_id", element: <News /> },
			{ path: "*", element: <Error404 /> },
		],
	},
]);

export default router;
