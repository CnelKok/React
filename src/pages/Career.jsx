import { lazy } from "react";

const Vacancies = lazy(() => import("../components/Vacancies"));

const Career = () => {
	return (
		<>
			<div className="margin-top">
				<Vacancies />
			</div>
		</>
	);
};

export default Career;
