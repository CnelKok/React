import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import FallBack from "./FallBack";

const VacancyItem = lazy(() => import("../components/VacancyItem"));

const Vacancy = () => {
	const { vacancy_id } = useParams();
	return (
		<>
			<div className="margin-top">
				<Suspense fallback={<FallBack />}>
					<VacancyItem id={vacancy_id} />
				</Suspense>
			</div>
		</>
	);
};

export default Vacancy;
