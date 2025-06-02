import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, useCallback, useState, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingOverlay from "./pages/LoadingOverlay";
import ErrorBoundary from "./pages/ErrorBoundary";
import ErrorConnection from "./pages/ErrorConnection";
import Cookies from "./components/Cokies";

const ContentLoader = lazy(() => import("./functions/ContentLoader"));

function App() {
	const [ready, setReady] = useState(false);

	const handleLoaded = useCallback(() => {
		setReady(true);
	}, []);

	const RenderComponent = import.meta.env.PROD ? (
		<ErrorBoundary fallback={<ErrorConnection />}>
			<Outlet />
		</ErrorBoundary>
	) : (
		<Outlet />
	);

	const RenderCookies = import.meta.env.PROD ? <Cookies /> : null;

	return (
		<>
			<LoadingOverlay ready={ready} />
			<Suspense fallback={null}>
				<ContentLoader onLoaded={handleLoaded}>
					<Header />
					<ScrollRestoration />
					<main>{RenderComponent}</main>
					<Footer />
					<Cookies />
				</ContentLoader>
			</Suspense>
		</>
	);
}

export default App;
