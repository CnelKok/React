import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/logo.svg";
import styles from "./header.module.css";

const NavItem = ({ text, to, handleNavClick }) => {
	return (
		<li className={styles["header__list-item"]}>
			<NavLink
				className={({ isActive }) =>
					`${styles["header__list-link"]} ${isActive ? styles["header__list-link--active"] : ""}`
				}
				to={to}
				onClick={handleNavClick}
			>
				{text}
			</NavLink>
		</li>
	);
};

const items = [
	["Главная", "/"],
	["Карьера", "/career"],
	["Трекматика", "/trekmatics"],
	["Контакты", "/contacts"],
];

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
							{items.map((item, idx) => (
								<NavItem key={idx} text={item[0]} to={item[1]} handleNavClick={handleNavClick} />
							))}
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
