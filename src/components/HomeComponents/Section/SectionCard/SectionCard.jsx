import { Link } from "react-router-dom";
import styles from "./sectioncard.module.css";
import LazyLoadImage from "../../../LazyLoadImage";

const SectionCard = ({ item, index }) => {
	return (
		<>
			<Link to={item.link + `/${index}`} className={`${styles["section-card"]}`}>
				<LazyLoadImage
					highSrc={item.imgBig}
					lowSrc={item.imgPlaceholder}
					smallSrc={item.imgSmall}
					mediumSrc={item.imgMedium}
					fill
					className={styles["section-card__image"]}
				/>
				<div className={styles["section-card__text"]}>
					{item.text
						.split("\n")
						.map((itm, idx) => (itm ? <p key={idx}>{itm}</p> : <br key={idx} />))}
				</div>
			</Link>
		</>
	);
};

export default SectionCard;
