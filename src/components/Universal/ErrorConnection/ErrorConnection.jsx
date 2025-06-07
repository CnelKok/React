import styles from "./errorconnection.module.css";

const ErrorConnection = ({ className }) => {
	return (
		<>
			<div className={`${styles["error-connection"]}`}>
				<div className={`error-connection__wrapper ${className}`}>
					<div className={styles["error-connection__inner"]}>
						<h2>Ошибка подключения</h2>
						<p>Проверьте сеть и пропробуйте перезагрузить страницу</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ErrorConnection;
