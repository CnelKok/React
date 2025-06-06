import chetra from "/logos/chetra.svg";
import chetra_card from "/cards/chetra_card.webp";
import chetra_card_placeholder from "/cards/resized/chetra_card_placeholder.webp";
import chetra_card_medium from "/cards/resized/chetra_card_medium.webp";
import chetra_card_small from "/cards/resized/chetra_card_small.webp";

import chaz from "/logos/chaz.svg";
import chaz_card from "/cards/chaz_card.webp";
import chaz_card_placeholder from "/cards/resized/chaz_card_placeholder.webp";
import chaz_card_medium from "/cards/resized/chaz_card_medium.webp";
import chaz_card_small from "/cards/resized/chaz_card_small.webp";

import promtraktor from "/logos/promtraktor.svg";
import promtraktor_card from "/cards/promtraktor_card.webp";
import promtraktor_card_placeholder from "/cards/resized/promtraktor_card_placeholder.webp";
import promtraktor_card_medium from "/cards/resized/promtraktor_card_medium.webp";
import promtraktor_card_small from "/cards/resized/promtraktor_card_small.webp";

import ctz from "/logos/ctz.svg";
import ctz_card from "/cards/ctz_card.webp";
import ctz_card_placeholder from "/cards/resized/ctz_card_placeholder.webp";
import ctz_card_medium from "/cards/resized/ctz_card_medium.webp";
import ctz_card_small from "/cards/resized/ctz_card_small.webp";

import kavaz from "/logos/kavaz.svg";
import kavaz_card from "/cards/kavaz_card.webp";
import kavaz_card_placeholder from "/cards/resized/kavaz_card_placeholder.webp";
import kavaz_card_medium from "/cards/resized/kavaz_card_medium.webp";
import kavaz_card_small from "/cards/resized/kavaz_card_small.webp";

import itsoft from "/logos/itsoft.svg";
import soyuz from "/logos/soyuz.svg";

const data = [
	{
		logo: chetra,
		alt: "Логотип ЧЕТРА",
		hoverText: `ООО «ЧЕТРА» – российская компания, эксклюзивно реализующая технику промышленного назначения и запасные части под брендом «ЧЕТРА» производства завода «Промтрактор», а также эксклюзивно поставляющая запасные части и комплектующие под брендом «ЧАЗ» производства ООО «ПК «ЧАЗ».
		`,
		text: `Техника под брендом «ЧЕТРА» используется при строительстве крупнейших производственных площадок, морских портов, освоении месторождений природных ископаемых и прокладке трубопроводов в 30 странах мира и во всех климатических зонах. Свыше 3 000 единиц техники под брендом «ЧЕТРА» находится сегодня в эксплуатации на территории Российской Федерации и за ее пределами.`,
		images: {
			imgBig: chetra_card,
			imgPlaceholder: chetra_card_placeholder,
			imgMedium: chetra_card_medium,
			imgSmall: chetra_card_small,
			width: 1280,
			height: 960,
			alt: "Продукция ЧЕТРА",
		},
	},
	{
		logo: chaz,
		alt: "Логотип ЧАЗ",
		hoverText: `Производство прочих комплектующих и принадлежностей для автотранспортных средств.`,
		images: {
			imgBig: chaz_card,
			imgPlaceholder: chaz_card_placeholder,
			imgMedium: chaz_card_medium,
			imgSmall: chaz_card_small,
			width: 1280,
			height: 632,
			alt: "Продукция ЧАЗ",
		},
	},
	{
		logo: promtraktor,
		alt: "Логотип Промтрактор",
		hoverText: `Производственная компания «Промтрактор» – это крупнейший производитель бульдозерно-рыхлительной и трубоукладочной техники. Предприятие специализируется на тракторах 9, 11, 15, 20, 25, 35, 40 и 50 классов.`,
		images: {
			imgBig: promtraktor_card,
			imgPlaceholder: promtraktor_card_placeholder,
			imgMedium: promtraktor_card_medium,
			imgSmall: promtraktor_card_small,
			width: 1280,
			height: 914,
			alt: "Продукция Промтрактор",
		},
	},
	{
		logo: ctz,
		alt: "Логотип ЧТЗ",
		hoverText: `Производство машин и оборудования для добычи полезных ископаемых и строительства.`,
		images: {
			imgBig: ctz_card,
			imgPlaceholder: ctz_card_placeholder,
			imgMedium: ctz_card_medium,
			imgSmall: ctz_card_small,
			width: 1280,
			height: 826,
			alt: "Продукция ЧТЗ",
		},
	},
	{
		logo: kavaz,
		alt: "Логотип КАВАЗ",
		hoverText: `ООО «КАВАЗ» (полное название предприятия - общество с ограниченной ответственностью «Канашский вагоностроительный завод») - одно из самых старейших предприятий Чувашской республики.`,
		text: ` Предприятие входит в структуру Концерна «Тракторные заводы».

Дата основания завода – 16 июня 1936 года. Расположен в городе Канаше Чувашской Республики, являющемся одним из крупных железнодорожных узлов в центре Поволжья. Предприятие начинало свою историю с ремонта грузовых вагонов. В 50-е годы XX века Канашский вагоноремонтный завод в числе первых в системе ремонтных предприятий железнодорожного транспорта страны освоил поточно-конвейерный метод ремонта вагонов. `,
		images: {
			imgBig: kavaz_card,
			imgPlaceholder: kavaz_card_placeholder,
			imgMedium: kavaz_card_medium,
			imgSmall: kavaz_card_small,
			width: 1280,
			height: 852,
			alt: "Продукция КАВАЗ",
		},
	},
	{
		logo: itsoft,
		alt: "Логотип ИТ-Софт",
		hoverText: `«ИТ-Софт» - многопрофильная компания, которая специализируется на разработке программных продуктов и ИТ-решений для частного бизнеса и государственных структур. `,
	},
	{
		logo: soyuz,
		alt: "Логотип Союз Машиностроителей России",
	},
];

export default data;
