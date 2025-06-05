import { useDocumentTitle } from "../functions/useDocumentTitle";

import Slider from "../components/HomeComponents/Slider";
import LazyOnVisible from "../components/LazyOnVisible";
import FallBack from "./FallBack";

const Home = () => {
	useDocumentTitle("ОИК | Официальный сайт | ОИК");
	return (
		<>
			<Slider />
			<LazyOnVisible
				loader={() => import("../components/HomeComponents/HomeNav")}
				fallback={<FallBack className={"container"} />}
				rootMargin={"100px"}
			/>
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
