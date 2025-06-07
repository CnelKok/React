import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../functions/useDocumentTitle";
import data from "./data";
import styles from "./portfolio.module.css";
import FallBack from "../../components/Universal/FallBack";

const TextElement = lazy(() => import("../../components/Universal/TextElement"));

const Porfolio = () => {
	const { portfolio_id } = useParams();
	const items = data[portfolio_id];
	useDocumentTitle(items[0]);
	return (
		<>
			<div className={`${styles["portfolio"]} container`}>
				<Suspense fallback={<FallBack style={{ padding: "calc(20/16*1rem)" }} />}>
					{items[1].map((item, idx) => (
						<TextElement key={idx} item={item} type={"portfolio"} />
					))}
				</Suspense>
			</div>
		</>
	);
};

export default Porfolio;
