import { useEffect, useState } from "react";
import styles from "./fallback.module.css";

const FallBack = () => {
	const [dots, setDots] = useState(0);

	useEffect(() => {
		const maxDots = 3;
		const interval = setInterval(() => {
			setDots((prev) => (prev + 1) % (maxDots + 1));
		}, 200);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.fallback}>
			<h1 className="loading">Загрузка{".".repeat(dots)}</h1>
		</div>
	);
};

export default FallBack;
