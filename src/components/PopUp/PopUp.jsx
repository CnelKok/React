import { useEffect } from "react";
import styles from "./popup.module.css";

const PopUp = ({ active, setActive, children }) => {
	useEffect(() => {
		const html = document.documentElement;
		if (active) {
			html.classList.add("lock");
		} else {
			html.classList.remove("lock");
		}
	}, [active]);
	return (
		<>
			<div
				className={`${styles.popup} ${active ? styles["popup--active"] : ""}`}
				onClick={() => setActive((prev) => !prev)}
			>
				{children}
			</div>
		</>
	);
};

export default PopUp;
