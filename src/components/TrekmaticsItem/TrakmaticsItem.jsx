import { lazy, Suspense } from "react";
import FallBack from "../../pages/FallBack";
import data from "./data";
import styles from "./trakmaticsitem.module.css";

const TextElement = lazy(() => import("../TextElement"));

const TrakmaticsItem = () => {
	return (
		<>
			<div className={`${styles["trakmatics"]} container`}>
				<Suspense fallback={<FallBack />}>
					{data.map((item, idx) => (
						<TextElement item={item} key={idx} type={"trakmatics"} />
					))}
				</Suspense>
			</div>
		</>
	);
};

export default TrakmaticsItem;
