import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDocumentTitle } from "../../functions/useDocumentTitle";
import styles from "./home.module.css";

import Slider from "../../components/HomeComponents/Slider";
import LazyOnVisible from "../../components/LazyOnVisible";

const HomeNav = lazy(() => import("../../components/HomeComponents/HomeNav"));
const FallBack = lazy(() => import("../FallBack"));
const ErrorConnection = lazy(() => import("../ErrorConnection"));

const Home = () => {
	useDocumentTitle("ОИК | Официальный сайт | ОИК");
	return (
		<>
			<Slider />
			<HomeNav />

			<ErrorBoundary
				fallback={<ErrorConnection className={`${styles["home__error"]} container`} />}
			>
				<LazyOnVisible
					loader={() => import("../../components/HomeComponents/Section")}
					fallback={<FallBack className={`${styles["home__section"]} container`} />}
					type={"news"}
				/>
				<LazyOnVisible
					loader={() => import("../../components/HomeComponents/Section")}
					fallback={<FallBack className={`${styles["home__section"]} container`} />}
					type={"portfolio"}
				/>
			</ErrorBoundary>
		</>
	);
};

export default Home;
