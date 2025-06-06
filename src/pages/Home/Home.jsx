import { useDocumentTitle } from "../../functions/useDocumentTitle";
import styles from "./home.module.css";

import Slider from "../../components/HomeComponents/Slider";
import LazyOnVisible from "../../components/LazyOnVisible";
import FallBack from "../FallBack";
import { lazy } from "react";
const HomeNav = lazy(() => import("../../components/HomeComponents/HomeNav"));

const Home = () => {
	useDocumentTitle("ОИК | Официальный сайт | ОИК");
	return (
		<>
			<Slider />
			<HomeNav />
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
		</>
	);
};

export default Home;
