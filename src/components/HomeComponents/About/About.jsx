import data from "./data";
import styles from "./about.module.css";

const AboutElement = ({ item }) => {
	return (
		<div className={styles["about__element"]}>
			{item.map((el, idx) => (
				<div key={idx} className={styles["about__element-inner"]}>
					{el.heading && <h3 className={styles["about__heading"]}>{el.heading}</h3>}
					{el.text.split("\n").map((smth, id) => (smth ? <p key={id}>{smth}</p> : <br key={id} />))}
					{el.link && (
						<a href={el.link} target="_blank" className={styles["about__element-link"]}>
							{el.linkText}
						</a>
					)}
				</div>
			))}
		</div>
	);
};

const About = () => {
	return (
		<>
			{data.map((item, idx) => (
				<AboutElement key={idx} item={item} />
			))}
		</>
	);
};

export default About;
