import { lazy } from "react";
import { useDocumentTitle } from "../functions/useDocumentTitle";

const Vacancies = lazy(() => import("../components/Vacancies"));

const Career = () => {
	useDocumentTitle("Карьера | ОИК");
	return (
		<>
			<div className="margin-top">
				<Vacancies />
			</div>
		</>
	);
};

export default Career;
