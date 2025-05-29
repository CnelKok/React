import styles from "./sponsors.module.css";
import data from "./data";

const Sponsors = () => {
	return (
		<>
			<div className={styles.sponsors}>
				{data.map((item, i) => (
					<></>
				))}
			</div>
		</>
	);
};

export default Sponsors;
