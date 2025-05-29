import TextCareer from "./TextCareer";
import TextContacts from "./TextContacts";
import TextHome from "./TextHome";
import TextTrakmatics from "./TextTrakmatics";
import TextVacancy from "./TextVacancy";
import styles from "./textelement.module.css";

const returnContent = (el, type, idx) => {
	switch (type) {
		case "career":
			return <TextCareer el={el} styles={styles} idx={idx} />;
		case "vacancy":
			return <TextVacancy el={el} styles={styles} />;
		case "trakmatics":
			return <TextTrakmatics el={el} styles={styles} />;
		case "contacts":
			return <TextContacts el={el} styles={styles} />;
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
