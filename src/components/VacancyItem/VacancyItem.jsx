import styles from "./vacancyitem.module.css";
import { lazy, Suspense } from "react";
import data from "./data";
import FallBack from "../../pages/FallBack";
import { useDocumentTitle } from "../../functions/useDocumentTitle";

const TextElement = lazy(() => import("../TextElement"));

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
