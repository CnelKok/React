import { Suspense, useEffect, useState, lazy } from "react";
import styles from "./homenav.module.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorConnection from "../../Universal/ErrorConnection";
import FallBack from "../../Universal/FallBack";

const Clients = lazy(() => import("./Clients"));
const Services = lazy(() => import("../Services"));
const Sponsors = lazy(() => import("../Sponsors"));
const About = lazy(() => import("./About"));

const navs = ["О компании", "Услуги", "Клиенты", "Партнёры"];

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
			case 1:
				return <Services />;
			case 2:
				return <Clients />;
			case 3:
				return <Sponsors />;
			default:
				break;
		}
	};
	return (
		<>
			<div className={`${styles.nav} container`}>
				<nav>
					<ul className={styles.nav__list}>
						{navs.map((item, idx) => (
							<li
								key={idx}
								className={`${idx === index ? styles["nav__list-item--active"] : ""} ${
									styles["nav__list-item"]
								}`}
								onClick={() => setIndex(idx)}
							>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</nav>
				<ErrorBoundary fallback={<ErrorConnection />}>
					<Suspense fallback={<FallBack className={styles["nav__fallback"]} />}>
						{getElement(index)}
					</Suspense>
				</ErrorBoundary>
			</div>
		</>
	);
};

export default HomeNav;
