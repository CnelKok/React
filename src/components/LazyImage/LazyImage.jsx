import { useEffect, useRef, useState } from "react";
import styles from "./lazyimage.module.css";

const LazyImage = ({ path }) => {
	const imgRef = useRef(null);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (imgRef.current?.complete) {
			setLoaded(true);
		}
	}, []);

	return (
		<div className={styles["image"]} style={{ backgroundImage: `url(${path.imgSmall})` }}>
			<img
				ref={imgRef}
				src={path.imgBig}
				alt=""
				className={styles["image__inner"]}
				style={{ opacity: loaded ? 1 : 0, transitionDuration: "0.2s" }}
				onLoad={() => setLoaded(true)}
				loading="lazy"
			/>
		</div>
	);
};

export default LazyImage;
