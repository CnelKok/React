import { useEffect, useRef, useState } from "react";
import styles from "./lazyimage.module.css";

const LazyImage = ({ path, alt = "", sizes = "50vw" }) => {
	const imgRef = useRef(null);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (imgRef.current?.complete) {
			setLoaded(true);
		}
	}, []);

	const srcSet = [
		path.imgSmall && `${path.imgSmall} 480w`,
		path.imgMedium && `${path.imgMedium} 768w`,
		path.imgBig && `${path.imgBig} 1440w`,
	]
		.filter(Boolean)
		.join(", ");

	return (
		<div className={styles.image} style={{ backgroundImage: `url(${path.imgSmall})` }}>
			<img
				ref={imgRef}
				src={path.imgLarge}
				srcSet={srcSet}
				sizes={sizes}
				alt={alt}
				className={styles.image__inner}
				style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.2s" }}
				onLoad={() => setLoaded(true)}
				loading="lazy"
			/>
		</div>
	);
};

export default LazyImage;
