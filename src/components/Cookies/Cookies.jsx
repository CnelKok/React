import { useEffect, useState } from "react";
import styles from "./cookies.module.css";
const Cookies = () => {
	const [isActive, setIsActive] = useState(() => {
		const saved = localStorage.getItem("cookieAgreement");
		return saved !== null ? JSON.parse(saved) : true;
	});
	const [hidden, setHidden] = useState(false);

	const handleClick = () => {
		setIsActive(false);
	};

	useEffect(() => {
		localStorage.setItem("cookieAgreement", JSON.stringify(isActive));
		getRidOff();
	}, [isActive]);

	const getRidOff = () => {
		!isActive && setHidden(true);
	};

	if (hidden) {
		return null;
	}

	return (
		<div
			className={`${styles["cookies"]} ${isActive ? "" : styles["cookies--hide"]}`}
			onTransitionEnd={() => getRidOff()}
		>
			<div className={`${styles["cookies__inner"]} container`}>
				<p>
					Этот сайт использует файлы cookie. Собранная при помощи cookie информация не может
					идентифицировать вас, однако может помочь нам улучшить работу нашего сайта. Продолжая
					использовать сайт, вы даете согласие на обработку файлов cookie.
				</p>
				<div className={styles["button-container"]}>
					<button
						className={`${styles["button"]} ${styles["button--secondary"]}`}
						onClick={() => handleClick()}
					>
						Отклонить
					</button>
					<button
						className={`${styles["button"]} ${styles["button--primary"]}`}
						onClick={() => handleClick()}
					>
						Принять
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cookies;
