import { useDocumentTitle } from "../functions/useDocumentTitle";
import Vacancies from "../components/Career/Vacancies";

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
