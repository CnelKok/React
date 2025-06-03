import { useEffect } from "react";

export function useDocumentTitle(title, options = { restoreOnUnmount: false }) {
	useEffect(() => {
		const prev = document.title;
		document.title = title;

		return () => {
			if (options.restoreOnUnmount) {
				document.title = prev;
			}
		};
	}, [title]);
}
