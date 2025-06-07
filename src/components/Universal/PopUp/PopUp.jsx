import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./popup.module.css";

const PopUp = ({ active, setActive, children }) => {
	const modalRoot = document.getElementById("modal-root");

	useEffect(() => {
		const html = document.documentElement;
		if (active) {
			html.classList.add("lock");
		} else {
			html.classList.remove("lock");
		}
	}, [active]);

	if (!active) return null;
	return createPortal(
		<>
			<div
				className={`${styles.popup} ${active ? styles["popup--active"] : ""}`}
				onClick={() => setActive((prev) => !prev)}
			>
				<div onClick={(e) => e.stopPropagation()} className={`${styles["popup__inner"]} container`}>
					{children}
				</div>
			</div>
		</>,
		modalRoot
	);
};

export default PopUp;
