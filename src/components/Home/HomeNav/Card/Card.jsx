import styles from "./card.module.css";
import setting from "/setting.svg";

const Card = ({ logo, hoverText, onClick, style, alt }) => {
	return (
		<div className={`${styles.card} ${style || ""}`} onClick={onClick}>
			<div className={styles["card__image"]}>
				<img src={logo} alt={alt} />
			</div>
			<p>{hoverText}</p>
			<div className={styles["card__setting"]}>
				<img src={setting} alt="Шестерёнка" loading="lazy" />
			</div>
		</div>
	);
};

export default Card;
