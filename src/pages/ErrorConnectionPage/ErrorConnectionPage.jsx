import { lazy } from "react";
import styles from "./errorconnectionpage.module.css";

const Footer = lazy(() => import("../../components/Footer"));
const Header = lazy(() => import("../../components/Header"));

const ErrorConnectionPage = () => {
	return (
		<>
			<Header />
			<div className={`${styles["error-connection"]} margin-top container`}>
				<div className={styles["error-connection__inner"]}>
					<h1>Ошибка подключения</h1>
					<p>Проверьте сеть и пропробуйте перезагрузить страницу</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ErrorConnectionPage;
