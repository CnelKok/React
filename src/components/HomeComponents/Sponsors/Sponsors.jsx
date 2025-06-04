import styles from "./sponsors.module.css";
import data from "./data";
import Card from "../Card";

const Sponsors = () => {
	return (
		<>
			<div className={styles.sponsors}>
				{data.map((item, i) => (
					<Card key={i} {...item} style={styles["card-cursor"]} />
				))}
			</div>
		</>
	);
};

export default Sponsors;
