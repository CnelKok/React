import img1 from "/news/1.jpg";
import img1_small from "/news/1_small.webp";
import img2 from "/news/2.png";
import img2_small from "/news/2_small.webp";

const newsData = {
	title: "Новости",
	cards: [
		{
			imgBig: img1,
			imgSmall: img1_small,
			link: "news",
			text: `19 мая 2022
						Участие в конференции TAdviser SummIT`,
		},
		{
			imgBig: img2,
			imgSmall: img2_small,
			link: "news",
			text: `16 мая 2022
						Благодарственное письмо`,
		},
	],
};

export default newsData;
