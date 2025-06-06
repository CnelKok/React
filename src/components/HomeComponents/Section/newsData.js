import img1 from "/news/1.jpg";
import img2 from "/news/2.png";

import img1_placeholder from "/news/resized/1_placeholder.webp";
import img2_placeholder from "/news/resized/2_placeholder.webp";

import img1_small from "/news/resized/1_small.webp";
import img2_small from "/news/resized/2_small.webp";

const newsData = {
	title: "Новости",
	cards: [
		{
			imgBig: img1,
			imgPlaceholder: img1_placeholder,
			imgSmall: img1_small,
			link: "news",
			text: `19 мая 2022
						Участие в конференции TAdviser SummIT`,
		},
		{
			imgBig: img2,
			imgPlaceholder: img2_placeholder,
			imgSmall: img2_small,
			link: "news",
			text: `16 мая 2022
						Благодарственное письмо`,
		},
	],
};

export default newsData;
