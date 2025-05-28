import TextCareer from "./TextCareer";
import styles from "./textelement.module.css";
import TextHome from "./TextHome";
import TextVacancy from "./TextVacancy";

const returnContent = (el, type, idx) => {
	switch (type) {
		case "career":
			return <TextCareer el={el} styles={styles} idx={idx} />;
		case "vacancy":
			return <TextVacancy el={el} styles={styles} />;
		default:
			return <TextHome el={el} styles={styles} />;
	}
};

const TextElement = ({ item, type }) => {
	return (
		<div className={styles["text__element"]}>
			{item.map((el, idx) => (
				<div key={idx} className={styles["text__element-inner"]}>
					{returnContent(el, type, idx)}
				</div>
			))}
		</div>
	);
};

export default TextElement;
