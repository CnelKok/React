import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css";
import data from "./data";

const LazyImage = ({ path }) => {
	const imgRef = useRef(null);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (imgRef.current?.complete) {
			setLoaded(true);
		}
	}, []);

	return (
		<div
			className={styles["slider__image-container"]}
			style={{ backgroundImage: `url(${path.imgSmall})` }}
		>
			<img
				ref={imgRef}
				src={path.imgBig}
				alt=""
				className={styles["slider__image"]}
				style={{ opacity: loaded ? 1 : 0, transitionDuration: "0.2s" }}
				onLoad={() => setLoaded(true)}
				loading="lazy"
			/>
		</div>
	);
};

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
