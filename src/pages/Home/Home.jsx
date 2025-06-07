import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDocumentTitle } from "../../functions/useDocumentTitle";
import styles from "./home.module.css";

import Slider from "../../components/Home/Slider";
import LazyOnVisible from "../../components/Universal/LazyOnVisible";
import ErrorConnection from "../../components/Universal/ErrorConnection";
import FallBack from "../../components/Universal/FallBack";

const HomeNav = lazy(() => import("../../components/Home/HomeNav"));

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
					loader={() => import("../../components/Home/Section")}
					fallback={<FallBack className={`${styles["home__section"]} container`} />}
					type={"news"}
				/>
				<LazyOnVisible
					loader={() => import("../../components/Home/Section")}
					fallback={<FallBack className={`${styles["home__section"]} container`} />}
					type={"portfolio"}
				/>
			</ErrorBoundary>
		</>
	);
};

export default Home;
