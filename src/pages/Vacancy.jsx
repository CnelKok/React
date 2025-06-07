import { useParams } from "react-router-dom";
import VacancyItem from "../components/Career/VacancyItem";

const Vacancy = () => {
	const { vacancy_id } = useParams();
	return (
		<>
			<div className="margin-top ">
				<VacancyItem id={vacancy_id} />
			</div>
		</>
	);
};

export default Vacancy;
