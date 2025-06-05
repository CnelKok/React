import newsData from "./newsData";
import portfolioData from "./portfolioData";
import styles from "./section.module.css";

import { lazy } from "react";

const SectionCard = lazy(() => import("./SectionCard"));

const Section = ({ type }) => {
	const chooseData = (key) => {
		switch (key) {
			case "news":
				return newsData;
			case "portfolio":
				return portfolioData;
			default:
				break;
		}
	};

	const data = chooseData(type);
	return (
		<>
			<div className={`${styles["section"]} container`}>
				<h1 className={styles["section__title"]}>{data.title}</h1>
				<div className={styles["section__card-grid"]}>
					{data.cards.map((item, idx) => (
						<SectionCard key={idx} item={item} index={idx} />
					))}
				</div>
			</div>
		</>
	);
};

export default Section;
