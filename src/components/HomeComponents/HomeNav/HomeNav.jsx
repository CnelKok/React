import { useEffect, useState } from "react";
import About from "../About";
import styles from "./homenav.module.css";

const NavComponent = ({ item }) => {
	return <span>{item}</span>;
};

const navs = ["О компании", "Услуги", "Клиенты", "Спонсоры"];

const HomeNav = () => {
	const [index, setIndex] = useState(() => {
		const saved = localStorage.getItem("index");
		return saved !== null ? Number(saved) : 0;
	});

	useEffect(() => {
		localStorage.setItem("index", index);
	}, [index]);

	const getElement = (i) => {
		switch (i) {
			case 0:
				return <About />;
			default:
				break;
		}
	};
	return (
		<>
			<div className={`${styles.nav} container`}>
				<nav className={`${styles["nav__component"]}`}>
					<ul className={styles.nav__list}>
						{navs.map((item, idx) => (
							<li
								key={idx}
								className={`${idx === index ? styles["nav__list-item--active"] : ""} ${
									styles["nav__list-item"]
								}`}
								onClick={() => setIndex(idx)}
							>
								<NavComponent item={item} />
							</li>
						))}
					</ul>
				</nav>
				{getElement(index)}
			</div>
		</>
	);
};

export default HomeNav;
