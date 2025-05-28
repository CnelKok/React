import styles from "./vacancyitem.module.css";

import data from "./data";
import TextElement from "../TextElement";

const VacancyItem = ({ id }) => {
	const item = data[id];
	return (
		<>
			<div className={`${styles["vacancy-item"]} container`}>
				<TextElement item={item} type={"vacancy"} />
			</div>
		</>
	);
};

export default VacancyItem;
