import TrakmaticsItem from "../components/TrekmaticsItem";
import { useDocumentTitle } from "../functions/useDocumentTitle";

const Trekmatics = () => {
	useDocumentTitle("Трекматика | ОИК");
	return (
		<>
			<div className="margin-top">
				<TrakmaticsItem />
			</div>
		</>
	);
};

export default Trekmatics;
