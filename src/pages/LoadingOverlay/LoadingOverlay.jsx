import React, { useState, useEffect } from "react";
import styles from "./loadingoverlay.module.css";

export default function LoadingOverlay({ ready }) {
	const [mounted, setMounted] = useState(false);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		if (ready) {
			requestAnimationFrame(() => setFade(false));
		}
	}, [ready]);

	const onTransitionEnd = () => {
		if (!fade) {
			setMounted(true);
		}
	};

	if (mounted) {
		return null;
	}

	return (
		<div
			className={styles["loading-overlay"]}
			style={{
				opacity: fade ? 1 : 0,
				transition: "opacity 0.5s",
			}}
			onTransitionEnd={onTransitionEnd}
		>
			{/* <h1>Загрузка...</h1> */}
			<div className={styles.spinner} />
		</div>
	);
}
