import img1 from "/portfolio/1.jpg";
import img1_small from "/portfolio/1_small.webp";
import img2 from "/portfolio/2.jpg";
import img2_small from "/portfolio/2_small.webp";

const portfolioData = {
	title: "Портфолио",
	cards: [
		{
			imgBig: img1,
			imgSmall: img1_small,
			link: "portfolio",
			text: `КМС`,
		},
		{
			imgBig: img2,
			imgSmall: img2_small,
			link: "portfolio",
			text: `1С ДО`,
		},
	],
};

export default portfolioData;
