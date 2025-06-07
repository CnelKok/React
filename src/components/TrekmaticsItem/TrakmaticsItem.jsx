import { lazy, Suspense } from "react";
import data from "./data";
import styles from "./trakmaticsitem.module.css";
import FallBack from "../Universal/FallBack";

const TextElement = lazy(() => import("../Universal/TextElement"));

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
