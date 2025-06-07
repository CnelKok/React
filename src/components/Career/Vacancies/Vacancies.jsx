import { Suspense, lazy } from "react";
import styles from "./vacancies.module.css";
import data from "./data";
import FallBack from "../../Universal/FallBack";

const TextElement = lazy(() => import("../../Universal/TextElement"));

const Vacancies = () => {
	return (
		<>
			<div className={`${styles["vacancies"]} container`}>
				<Suspense fallback={<FallBack className={styles["vacancy__fallback"]} />}>
					{data.map((item, idx) => (
						<TextElement key={idx} item={item} type={"career"} />
					))}
				</Suspense>
			</div>
		</>
	);
};

export default Vacancies;
