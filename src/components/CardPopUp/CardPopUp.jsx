import styles from "./cardpopup.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CardPopUp = ({ logo, hoverText, text, images }) => {
	return (
		<div className={styles.card}>
			<img className={styles.card__logo} src={logo} alt="" />
			<p>{hoverText}</p>
			{text &&
				text.split("\n").map((line, idx) => (line ? <p key={idx}>{line}</p> : <br key={idx} />))}
			<LazyLoadImage
				src={images.imgBig}
				width={"100%"}
				height={"auto"}
				effect="blur"
				placeholderSrc={images.imgSmall}
			/>
		</div>
	);
};

export default CardPopUp;
