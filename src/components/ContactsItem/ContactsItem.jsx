import { lazy, Suspense } from "react";
import styles from "./contactsitem.module.css";
import FallBack from "../../pages/FallBack";
import data from "./data";

const Map = lazy(() => import("../Map"));
const TextElement = lazy(() => import("../TextElement"));

const ContactsItem = () => {
	return (
		<>
			<div className={`${styles["contacts"]} container`}>
				<Suspense fallback={<FallBack />}>
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
