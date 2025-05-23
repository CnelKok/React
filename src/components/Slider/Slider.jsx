import { useEffect, useState } from "react";
import styles from "./slider.module.css";
import data from "./data";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const [animating, setAnimating] = useState(true);
	const [direction, setDirection] = useState(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			forward();
		}, 5000);

		return () => clearInterval(intervalId);
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
						translate: `-${(index + 1) * 100}%`,
						transition: animating ? "translate 0.4s" : "",
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					<img src={data[data.length - 1]} alt="" className={styles["slider__image"]} />
					{data.map((image, idx) => (
						<img key={idx} src={image} alt="" className={styles["slider__image"]} />
					))}
					<img src={data[0]} alt="" className={styles["slider__image"]} />
				</div>
			</div>
		</>
	);
};

export default Slider;
