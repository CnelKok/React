import newsData from "./newsData";
import portfolioData from "./portfolioData";
import SectionCard from "./SectionCard";
import styles from "./section.module.css";

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
			<section className={`${styles["section"]} container`}>
				<h1 className={styles["section__title"]}>{data.title}</h1>
				<div className={styles["section__card-grid"]}>
					{data.cards.map((item, idx) => (
						<SectionCard key={idx} item={item} index={idx} />
					))}
				</div>
			</section>
		</>
	);
};

export default Section;
