import TextElement from "../../Universal/TextElement";
import data from "./data";

const Services = () => {
	return (
		<>
			{data.map((item, idx) => (
				<TextElement key={idx} item={item} />
			))}
		</>
	);
};

export default Services;
