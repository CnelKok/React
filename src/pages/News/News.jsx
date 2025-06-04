import styles from "./news.module.css";
import data from "./data";
import { useParams } from "react-router-dom";
import TextElement from "../../components/TextElement";

const News = () => {
	const { news_id } = useParams();
	return (
		<>
			<div className={`${styles["news"]} container`}>
				{data[news_id].map((item, idx) => (
					<TextElement key={idx} item={item} type={"news"} />
				))}
			</div>
		</>
	);
};

export default News;
