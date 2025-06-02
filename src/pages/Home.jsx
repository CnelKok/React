import { lazy } from "react";

import Slider from "../components/HomeComponents/Slider";

const Section = lazy(() => import("../components/HomeComponents/Section"));
const HomeNav = lazy(() => import("../components/HomeComponents/HomeNav"));

const Home = () => {
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
