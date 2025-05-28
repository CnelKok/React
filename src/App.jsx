import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense, useCallback, useState, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingOverlay from "./pages/LoadingOverlay";

const ContentLoader = lazy(() => import("./functions/ContentLoader"));

function App() {
	const [ready, setReady] = useState(false);

	const handleLoaded = useCallback(() => {
		setReady(true);
	}, []);

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
				</ContentLoader>
			</Suspense>
		</>
	);
}

export default App;
