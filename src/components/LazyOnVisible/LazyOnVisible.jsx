import { useState, useRef, useEffect, Suspense, lazy } from "react";

export function LazyOnVisible({ loader, fallback = null, rootMargin = "0px", ...componentProps }) {
	const ref = useRef();
	const [Component, setComponent] = useState(null);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					const LazyLoaded = lazy(loader);
					setComponent(() => LazyLoaded);
					observer.disconnect();
				}
			},
			{ rootMargin }
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [loader, rootMargin]);

	return (
		<div ref={ref}>
			{Component ? (
				<Suspense fallback={fallback}>
					<Component {...componentProps} />
				</Suspense>
			) : (
				fallback
			)}
		</div>
	);
}

export default LazyOnVisible;
