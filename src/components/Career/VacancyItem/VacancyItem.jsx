import styles from "./vacancyitem.module.css";
import { lazy, Suspense } from "react";
import data from "./data";
import { useDocumentTitle } from "../../../functions/useDocumentTitle";
import FallBack from "../../Universal/FallBack";

const TextElement = lazy(() => import("../../Universal/TextElement"));

const VacancyItem = ({ id }) => {
	const item = data[id][1];
	const title = data[id][0];
	useDocumentTitle(title);
	return (
		<>
			<div className={`${styles["vacancy-item"]} container`}>
				<Suspense fallback={<FallBack />}>
					<TextElement item={item} type={"vacancy"} />
				</Suspense>
			</div>
		</>
	);
};

export default VacancyItem;
