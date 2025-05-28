import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css";
import data from "./data";
import LazyImage from "../../LazyImage";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const [animating, setAnimating] = useState(true);
	const [direction, setDirection] = useState(null);
	const timeoutRef = useRef(null);
	const INTERVAL_MS = 5000;

	const tick = () => {
		forward();
		// переустанавливаем таймаут на следующий цикл
		timeoutRef.current = setTimeout(tick, INTERVAL_MS);
	};

	useEffect(() => {
		// Запустить первый таймаут сразу
		timeoutRef.current = setTimeout(tick, INTERVAL_MS);

		// Обработчик видимости страницы
		const handleVisibilityChange = () => {
			if (document.hidden) {
				// если вкладка скрыта — останавливаем таймаут
				clearTimeout(timeoutRef.current);
			} else {
				// если вкладка стала видимой — перезапускаем таймаут
				clearTimeout(timeoutRef.current);
				timeoutRef.current = setTimeout(tick, INTERVAL_MS);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			// при анмаунте убираем слушатель и чистим таймаут
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			clearTimeout(timeoutRef.current);
		};
	}, []);

	const forward = () => {
		setAnimating(true);
		setIndex((prev) => prev + 1);
		setDirection("forward");
	};

	const backward = () => {
		setAnimating(true);
		setIndex((prev) => prev - 1);
		setDirection("backward");
	};

	const handleTransitionEnd = () => {
		switch (direction) {
			case "forward":
				index === data.length && (setAnimating(false), setIndex(0));
				break;

			case "backward":
				index === -1 && (setAnimating(false), setIndex(data.length - 1));
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div className={styles.slider}>
				<div
					className={styles["slider__container"]}
					style={{
						transform: `translateX(-${(index + 1) * 100}%)`,
						transition: animating ? "transform 0.4s" : "",
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					<LazyImage path={data[data.length - 1]} />

					{data.map((image, idx) => (
						<LazyImage path={image} key={idx} />
					))}
					<LazyImage path={data[0]} />
				</div>
			</div>
		</>
	);
};

export default Slider;
