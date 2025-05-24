import data from "./data";
import TextElement from "../../TextElement";

const About = () => {
	return (
		<>
			{data.map((item, idx) => (
				<TextElement key={idx} item={item} />
			))}
		</>
	);
};

export default About;
