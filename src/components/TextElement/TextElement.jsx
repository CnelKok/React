import styles from "./textelement.module.css";

const TextElement = ({ item }) => {
	return (
		<div className={styles["text__element"]}>
			{item.map((el, idx) => (
				<div key={idx} className={styles["text__element-inner"]}>
					{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
					{el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
					{el.link && (
						<a href={el.link} target="_blank" className={styles["text__element-link"]}>
							{el.linkText}
						</a>
					)}
				</div>
			))}
		</div>
	);
};

export default TextElement;
