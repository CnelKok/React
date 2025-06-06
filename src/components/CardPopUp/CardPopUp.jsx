import LazyLoadImage from "../LazyLoadImage";
import styles from "./cardpopup.module.css";

const CardPopUp = ({ logo, hoverText, text, images }) => {
	return (
		<div className={styles.card}>
			<img className={styles.card__logo} src={logo} alt="" />
			<p>{hoverText}</p>
			{text &&
				text.split("\n").map((line, idx) => (line ? <p key={idx}>{line}</p> : <br key={idx} />))}
			{images && (
				<LazyLoadImage
					highSrc={images.imgBig}
					lowSrc={images.imgPlaceholder}
					mediumSrc={images.imgMedium}
					smallSrc={images.imgSmall}
					width={images.width}
					height={images.height}
				/>
			)}
		</div>
	);
};

export default CardPopUp;
