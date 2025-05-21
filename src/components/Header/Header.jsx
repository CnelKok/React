import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`${styles.header__container} container`}>
				<Link className={styles.header__logo} to="/">
					<img src={logo} alt="" />
				</Link>
				<nav className={styles.header__nav}>
					<ul className={styles.header__list}>
						<li className={styles["header__list-item"]}>
							<NavLink className={styles["header__list-link"]} to="/">
								Главная
							</NavLink>
						</li>
						<li className={styles["header__list-item"]}>
							<NavLink className={styles["header__list-link"]} to="/career">
								Карьера
							</NavLink>
						</li>
						<li className={styles["header__list-item"]}>
							<NavLink className={styles["header__list-link"]} to="/trekmatics">
								Трекматика
							</NavLink>
						</li>
						<li className={styles["header__list-item"]}>
							<NavLink className={styles["header__list-link"]} to="/contacts">
								Контакты
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
