import { useState } from "react";
import styles from "./cookies.module.css";
const Cookies = () => {
	const [isActive, setIsActive] = useState(true);

	const handleClick = () => {
		setIsActive(false);
	};

	return (
		<div className={`${styles["cookies"]} ${isActive ? "" : styles["cookies--hide"]}`}>
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
