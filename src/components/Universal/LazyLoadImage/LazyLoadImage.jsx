import { useState, useRef, useEffect } from "react";

export default function LazyLoadImage({
	lowSrc,
	smallSrc,
	mediumSrc,
	highSrc,
	sizes = "50vw",
	alt,
	width,
	height,
	fill = false,
	className = "",
}) {
	const [isHighLoaded, setHighLoaded] = useState(false);
	const [isInView, setInView] = useState(false);
	const imgRef = useRef(null);

	const highSrcSet = [
		smallSrc && `${smallSrc} 480w`,
		mediumSrc && `${mediumSrc} 768w`,
		highSrc && `${highSrc} 1280w`,
	]
		.filter(Boolean)
		.join(", ");

	useEffect(() => {
		if (!imgRef.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
						observer.disconnect();
					}
				});
			},
			{ rootMargin: "100px" }
		);
		observer.observe(imgRef.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isInView) return;
		const img = new Image();
		if (highSrcSet) {
			img.srcset = highSrcSet;
			img.sizes = sizes;
		} else {
			img.src = highSrc;
		}
		img.onload = () => setHighLoaded(true);
	}, [isInView, highSrc, highSrcSet, sizes]);

	const containerStyle = fill
		? {
				position: "relative",
				width: "100%",
				height: "100%",
				overflow: "hidden",
				flexShrink: 0,
		  }
		: {
				position: "relative",
				width: "100%",
				paddingBottom: width && height ? `${(height / width) * 100}%` : "auto",
				overflow: "hidden",
		  };

	const imgStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		transition: "opacity 0.3s",
	};

	return (
		<div ref={imgRef} style={containerStyle} className={className}>
			<img src={lowSrc} alt={alt} style={imgStyle} fetchPriority="high" aria-hidden={isInView} />

			{isInView && (
				<img
					src={highSrc}
					srcSet={highSrcSet}
					sizes={sizes}
					alt={alt}
					style={{ ...imgStyle, opacity: isHighLoaded ? 1 : 0 }}
				/>
			)}
		</div>
	);
}
