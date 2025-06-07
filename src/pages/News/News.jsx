import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../functions/useDocumentTitle";
import styles from "./news.module.css";
import data from "./data";
import FallBack from "../../components/Universal/FallBack";

const TextElement = lazy(() => import("../../components/Universal/TextElement"));

const News = () => {
	const { news_id } = useParams();
	const items = data[news_id];
	useDocumentTitle(items[0]);
	return (
		<>
			<div className={`${styles["news"]} container`}>
				<Suspense fallback={<FallBack />}>
					<TextElement item={items[1]} type={"news"} />
				</Suspense>
			</div>
		</>
	);
};

export default News;
