import React, { useEffect } from "react";

const ContentLoader = ({ onLoaded, children }) => {
	useEffect(() => {
		onLoaded();
	}, []);

	return <>{children}</>;
};

export default ContentLoader;
