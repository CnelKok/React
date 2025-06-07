import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, useCallback, useState, lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ContentLoader = lazy(() => import("./functions/ContentLoader"));
const LoadingOverlay = lazy(() => import("./pages/LoadingOverlay"));
const Cookies = lazy(() => import("./components/Cookies"));

function App() {
	const [ready, setReady] = useState(false);

	const handleLoaded = useCallback(() => {
		setReady(true);
	}, []);

	const RenderCookies = import.meta.env.PROD ? <Cookies /> : null;

	return (
		<>
			<LoadingOverlay ready={ready} />
			<Suspense fallback={null}>
				<ContentLoader onLoaded={handleLoaded}>
					<Header />
					<ScrollRestoration />
					<main>
						<Outlet />
					</main>
					<Footer />
					{RenderCookies}
				</ContentLoader>
			</Suspense>
		</>
	);
}

export default App;
