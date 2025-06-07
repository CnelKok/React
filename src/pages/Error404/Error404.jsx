import styles from "./error404.module.css";

const Error404 = () => {
	return (
		<div className={`${styles.error} margin-top container`}>
			<div className={styles["error__inner"]}>
				<h1>Ошибка 404</h1>
				<p>Страница, на которую вы ссылаетесь, не существует</p>
			</div>
		</div>
	);
};

export default Error404;
