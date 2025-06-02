import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styles from "./sectioncard.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const SectionCard = ({ item, index }) => {
	return (
		<>
			<Link to={item.link + `/${index}`} className={`${styles["section-card"]}`}>
				<LazyLoadImage
					src={item.imgBig}
					effect="blur"
					placeholderSrc={item.imgSmall}
					wrapperClassName={styles["section-card__image"]}
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
