import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/logo.svg";
import styles from "./header.module.css";

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!isOpen);
		const htmlElement = document.documentElement;
		htmlElement.classList.toggle("lock");
	};

	const handleNavClick = () => {
		if (isOpen) {
			handleClick();
		}
	};

	return (
		<header className={styles.header}>
			<div className={`${styles.header__container} container`}>
				<Link className={styles.header__logo} to="/">
					<img src={logo} alt="" />
				</Link>
				<div
					className={`${styles.header__overlay} ${isOpen ? styles["header__overlay--active"] : ""}`}
				>
					<nav className={styles.header__nav}>
						<ul className={styles.header__list}>
							<li className={styles["header__list-item"]}>
								<NavLink
									className={({ isActive }) =>
										`${styles["header__list-link"]} ${
											isActive ? styles["header__list-link--active"] : ""
										}`
									}
									to="/"
									onClick={handleNavClick}
								>
									Главная
								</NavLink>
							</li>
							<li className={styles["header__list-item"]}>
								<NavLink
									className={({ isActive }) =>
										`${styles["header__list-link"]} ${
											isActive ? styles["header__list-link--active"] : ""
										}`
									}
									to="/career"
									onClick={handleNavClick}
								>
									Карьера
								</NavLink>
							</li>
							<li className={styles["header__list-item"]}>
								<NavLink
									className={({ isActive }) =>
										`${styles["header__list-link"]} ${
											isActive ? styles["header__list-link--active"] : ""
										}`
									}
									to="/trekmatics"
									onClick={handleNavClick}
								>
									Трекматика
								</NavLink>
							</li>
							<li className={styles["header__list-item"]}>
								<NavLink
									className={({ isActive }) =>
										`${styles["header__list-link"]} ${
											isActive ? styles["header__list-link--active"] : ""
										}`
									}
									to="/contacts"
									onClick={handleNavClick}
								>
									Контакты
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>

				<button
					className={`${styles["header__burger-button"]} ${
						isOpen ? styles["header__burger-button--active"] : ""
					}`}
					onClick={handleClick}
				>
					<span className={styles["header_burger-button-line"]}></span>
					<span className={styles["header_burger-button-line"]}></span>
				</button>
			</div>
		</header>
	);
};

export default Header;
