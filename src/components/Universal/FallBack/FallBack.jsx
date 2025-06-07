import { useEffect, useState } from "react";
import styles from "./fallback.module.css";
export default function FallBack({ className }) {
	const [dots, setDots] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev + 1) % 4);
		}, 300);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className={`${styles.fallback} ${className || ""}`}>
			<h3>Загрузка{".".repeat(dots)}</h3>
		</div>
	);
}
