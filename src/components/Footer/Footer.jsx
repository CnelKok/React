import styles from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<div className={styles.footer__main}></div>
				<div className={styles.footer__copyright}></div>
			</div>
		</footer>
	);
};

export default Footer;
