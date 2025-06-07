import { lazy } from "react";
import styles from "./textelement.module.css";

const TextCareer = lazy(() => import("./TextCareer"));
const TextContacts = lazy(() => import("./TextContacts"));
const TextHome = lazy(() => import("./TextHome"));
const TextNews = lazy(() => import("./TextNews"));
const TextPortfolio = lazy(() => import("./TextPortfolio"));
const TextTrakmatics = lazy(() => import("./TextTrakmatics"));
const TextVacancy = lazy(() => import("./TextVacancy"));

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
		case "news":
			return <TextNews el={el} styles={styles} />;
		case "portfolio":
			return <TextPortfolio el={el} styles={styles} />;
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
