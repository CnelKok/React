import styles from "./cardpopup.module.css";

const CardPopUp = ({ logo, hoverText, text, img }) => {
	return (
		<>
			<div className={`${styles["card"]} container`} onClick={(e) => e.stopPropagation()}>
				<img className={styles["card__logo"]} src={logo} alt="" />
				<p>{hoverText}</p>
				<p>{text}</p>
				<img className={styles["card__image"]} src={img} alt="" />
			</div>
		</>
	);
};

export default CardPopUp;
