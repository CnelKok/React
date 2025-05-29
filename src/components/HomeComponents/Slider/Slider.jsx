import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css";
import data from "./data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const [animating, setAnimating] = useState(true);
	const [direction, setDirection] = useState(null);
	const timeoutRef = useRef(null);
	const INTERVAL_MS = 5000;

	const tick = () => {
		forward();
		timeoutRef.current = setTimeout(tick, INTERVAL_MS);
	};

	useEffect(() => {
		timeoutRef.current = setTimeout(tick, INTERVAL_MS);

		const handleVisibilityChange = () => {
			if (document.hidden) {
				clearTimeout(timeoutRef.current);
			} else {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = setTimeout(tick, INTERVAL_MS);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
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
					<LazyLoadImage
						src={data[data.length - 1].imgBig}
						effect="blur"
						width={"100%"}
						wrapperClassName={styles["slider__image-container"]}
						placeholderSrc={data[data.length - 1].imgSmall}
					/>

					{data.map((image, idx) => (
						<LazyLoadImage
							key={idx}
							src={image.imgBig}
							effect="blur"
							width={"100%"}
							wrapperClassName={styles["slider__image-container"]}
							placeholderSrc={image.imgSmall}
						/>
					))}
					<LazyLoadImage
						src={data[0].imgBig}
						effect="blur"
						width={"100%"}
						wrapperClassName={styles["slider__image-container"]}
						placeholderSrc={data[0].imgSmall}
					/>
				</div>
			</div>
		</>
	);
};

export default Slider;
