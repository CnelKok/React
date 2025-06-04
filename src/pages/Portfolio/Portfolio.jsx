import styles from "./portfolio.module.css";
import data from "./data";
import TextElement from "../../components/TextElement";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../functions/useDocumentTitle";

const Porfolio = () => {
	const { portfolio_id } = useParams();
	const items = data[portfolio_id];
	useDocumentTitle(items[0]);
	return (
		<>
			<div className={`${styles["portfolio"]} container`}>
				{items[1].map((item, idx) => (
					<TextElement key={idx} item={item} type={"portfolio"} />
				))}
			</div>
		</>
	);
};

export default Porfolio;
