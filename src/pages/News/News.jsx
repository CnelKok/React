import styles from "./news.module.css";
import data from "./data";
import { useParams } from "react-router-dom";
import TextElement from "../../components/TextElement";
import { useDocumentTitle } from "../../functions/useDocumentTitle";

const News = () => {
	const { news_id } = useParams();
	const items = data[news_id];
	useDocumentTitle(items[0]);
	return (
		<>
			<div className={`${styles["news"]} container`}>
				<TextElement item={items[1]} type={"news"} />
			</div>
		</>
	);
};

export default News;
