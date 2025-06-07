import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FallBack from "./pages/FallBack";
import ErrorConnectionPage from "./pages/ErrorConnectionPage";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			errorElement: <ErrorConnectionPage />,

			children: [
				{
					index: true,
					lazy: () => import("./pages/Home").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "career",
					lazy: () => import("./pages/Career").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "trekmatics",
					lazy: () => import("./pages/Trekmatics").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "contacts",
					lazy: () => import("./pages/Contacts").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "vacancy/:vacancy_id",
					lazy: () => import("./pages/Vacancy").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "news/:news_id",
					lazy: () => import("./pages/News").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "portfolio/:portfolio_id",
					lazy: () => import("./pages/Portfolio").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
				{
					path: "*",
					lazy: () => import("./pages/Error404").then((mod) => ({ Component: mod.default })),
					hydrateFallbackElement: <FallBack />,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	}
);

export default router;
