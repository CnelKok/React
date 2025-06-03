import { lazy } from "react";

import Slider from "../components/HomeComponents/Slider";
import { useDocumentTitle } from "../functions/useDocumentTitle";

const Section = lazy(() => import("../components/HomeComponents/Section"));
const HomeNav = lazy(() => import("../components/HomeComponents/HomeNav"));

const Home = () => {
	useDocumentTitle("ОИК | Официальный сайт | ОИК");
	return (
		<>
			<Slider />
			<HomeNav />
			<Section type={"news"} />
			<Section type={"portfolio"} />
		</>
	);
};

export default Home;
