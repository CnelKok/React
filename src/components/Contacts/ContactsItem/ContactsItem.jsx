import { lazy, Suspense } from "react";
import styles from "./contactsitem.module.css";
import data from "./data";
import FallBack from "../../Universal/FallBack";

const Map = lazy(() => import("../Map"));
const TextElement = lazy(() => import("../../Universal/TextElement"));

const ContactsItem = () => {
	return (
		<>
			<div className={`${styles["contacts"]} container`}>
				<Suspense fallback={<FallBack className={styles["contacts__fallback"]} />}>
					{data.map((item, idx) => (
						<TextElement item={item} key={idx} type={"contacts"} />
					))}
					<Map />
				</Suspense>
			</div>
		</>
	);
};

export default ContactsItem;
