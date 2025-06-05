import { lazy } from "react";
import { useDocumentTitle } from "../functions/useDocumentTitle";

import Slider from "../components/HomeComponents/Slider";
import LazyOnVisible from "../components/LazyOnVisible";
import FallBack from "./FallBack";

const HomeNav = lazy(() => import("../components/HomeComponents/HomeNav"));

const Home = () => {
	useDocumentTitle("ОИК | Официальный сайт | ОИК");
	return (
		<>
			<Slider />
			<HomeNav />
			<LazyOnVisible
				loader={() => import("../components/HomeComponents/Section")}
				fallback={<FallBack className={"container"} />}
				type={"news"}
			/>
			<LazyOnVisible
				loader={() => import("../components/HomeComponents/Section")}
				fallback={<FallBack className={"container"} />}
				type={"portfolio"}
			/>
		</>
	);
};

export default Home;
