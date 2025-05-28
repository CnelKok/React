import { Link } from "react-router-dom";

const TextCareer = ({ el, styles, idx }) => {
	return (
		<>
			{el.headingBig && <h1 className={styles["text__heading--big"]}>{el.headingBig}</h1>}
			{el.heading && <h3 className={styles["text__heading"]}>{el.heading}</h3>}
			<Link className={styles["text__link"]} to={`/React/vacancy/${idx}`}>
				{el.text}
			</Link>
		</>
	);
};

export default TextCareer;
