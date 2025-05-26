import LazyImage from "../LazyImage";
import styles from "./cardpopup.module.css";

const CardPopUp = ({ logo, hoverText, text, images }) => {
	return (
		<>
			<div className={`${styles["card"]} container`} onClick={(e) => e.stopPropagation()}>
				<img className={styles["card__logo"]} src={logo} alt="" />
				<p>{hoverText}</p>
				<p>{text}</p>
				<LazyImage path={images} />
			</div>
		</>
	);
};

export default CardPopUp;
