import img1 from "/portfolio/1.jpg";
import img2 from "/portfolio/2.jpg";

import img1_placeholder from "/portfolio/resized/1_placeholder.webp";
import img2_placeholder from "/portfolio/resized/2_placeholder.webp";

import img1_medium from "/portfolio/resized/1_medium.webp";
import img2_medium from "/portfolio/resized/2_medium.webp";

import img1_small from "/portfolio/resized/1_small.webp";
import img2_small from "/portfolio/resized/2_small.webp";

const portfolioData = {
	title: "Портфолио",
	cards: [
		{
			imgBig: img1,
			imgPlaceholder: img1_placeholder,
			imgSmall: img1_small,
			imgMedium: img1_medium,
			link: "portfolio",
			text: `КМС`,
		},
		{
			imgBig: img2,
			imgPlaceholder: img2_placeholder,
			imgSmall: img2_small,
			imgMedium: img2_medium,
			link: "portfolio",
			text: `1С ДО`,
		},
	],
};

export default portfolioData;
