import React, { Fragment } from "react";
import styles from "./footer.module.css";
import callIcon from "/call.svg";
import locationIcon from "/location.svg";
import mailIcon from "/mail.svg";

const items = [
	{
		type: "tel",
		icon: callIcon,
		text: "+7 (8352) 24-06-30",
	},
	{
		type: "text",
		icon: locationIcon,
		text: `Адрес: г. Чебоксары, пр-кт Мира, д. 1

Юридический адрес: 428024, г. Чебоксары, пр. Мира, д. 1, литер 7, этаж 2, помещ. 2`,
	},
	{
		type: "email",
		icon: mailIcon,
		text: "info@iic21.ru",
	},
];

const renderers = {
	tel: (text) => (
		<a className={styles["footer__text-item"]} href={`tel:${text.replace(/[^\d+]/g, "")}`}>
			{text}
		</a>
	),

	email: (text) => (
		<a className={styles["footer__text-item"]} href={`mailto:${text}`}>
			{text}
		</a>
	),

	text: (text) => (
		<div className={styles.footer__text}>
			{text.split("\n").map((line, idx) =>
				line ? (
					<p key={idx} className={styles["footer__text-item"]}>
						{line}
					</p>
				) : (
					<br key={idx} />
				)
			)}
		</div>
	),
};

const FooterItem = ({ type, icon, text }) => {
	const Renderer = renderers[type] || ((t) => <span>{t}</span>);
	return (
		<li className={styles["footer__list-item"]}>
			<img className={styles["footer__list-icon"]} src={icon} alt="" />
			{Renderer(text)}
		</li>
	);
};

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<ul className={styles.footer__list}>
					{items.map((item, i) => (
						<FooterItem key={i} {...item} />
					))}
				</ul>
				<div className={styles.footer__copyright}>
					<p className={styles["footer__copyright-text"]}>© 2025 “ОИК”</p>
				</div>
			</div>
		</footer>
	);
}
