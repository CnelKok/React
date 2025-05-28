import { Suspense, lazy } from "react";
import styles from "./vacancies.module.css";
import data from "./data";
import FallBack from "../../pages/FallBack";

const TextElement = lazy(() => import("../TextElement"));

const Vacancies = () => {
	return (
		<>
			<div className={`${styles["vacancies"]} container`}>
				<Suspense fallback={<FallBack />}>
					{data.map((item, idx) => (
						<TextElement key={idx} item={item} type={"career"} />
					))}
				</Suspense>
			</div>
		</>
	);
};

export default Vacancies;
