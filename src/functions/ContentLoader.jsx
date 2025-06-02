import { useEffect } from "react";

const ContentLoader = ({ onLoaded, children }) => {
	useEffect(() => {
		onLoaded();
	}, [onLoaded]);

	return <>{children}</>;
};

export default ContentLoader;
