import { useEffect } from "react";

export default function FallBack() {
	const [dots, setDots] = useEffect(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev + 1) % 4);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<p>Загрузка{".".repeat(dots)}</p>
		</div>
	);
}
