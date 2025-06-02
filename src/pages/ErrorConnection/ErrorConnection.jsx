import styles from "./errorconnection.module.css";

const ErrorConnection = () => {
	return (
		<>
			<div className={`${styles["error-connection"]}  margin-top container`}>
				<div>
					<h1>Ошибка подключения</h1>
					<p>Проверьте сеть и пропробуйте перезагрузить страницу</p>
				</div>
			</div>
		</>
	);
};

export default ErrorConnection;
