import styles from "./footer.module.css";
import call from "/call.svg";
import location from "/location.svg";
import mail from "/mail.svg";
import { Fragment } from "react";

const FooterItem = ({ item }) => {
	const renderContent = (item) => {
		switch (item.type) {
			case "tel":
				return (
					<a
						className={styles["footer__text-item"]}
						href={`tel:${item.text.replace(/[^\d+]/g, "")}`}
					>
						{item.text}
					</a>
				);
			case "email":
				return (
					<a className={styles["footer__text-item"]} href={`mailto:${item.text}`}>
						{item.text}
					</a>
				);
			case "text":
				return (
					<div className={styles.footer__text}>
						{item.text.split("\n").map((line, i) => (
							<Fragment key={i}>
								{line ? (
									<>
										<p className={styles["footer__text-item"]}>{line}</p>
									</>
								) : (
									<br />
								)}
							</Fragment>
						))}
					</div>
				);

			default:
				return <span>{item.text}</span>;
		}
	};

	return (
		<li className={styles["footer__list-item"]}>
			<img className={styles["footer__list-icon"]} src={item.icon} alt="" />
			{renderContent(item)}
		</li>
	);
};

const data = [
	{
		type: "tel",
		icon: call,
		text: "+7 (8352) 24-06-30",
	},
	{
		type: "text",
		icon: location,
		text: "Адрес: г. Чебоксары, пр-кт Мира, д. 1\n\nЮридический адрес: 428024, г. Чебоксары,пр. Мира, д. 1, литер 7, этаж 2, помещ. 2",
	},
	{
		type: "email",
		icon: mail,
		text: "info@iic21.ru",
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<ul className={styles.footer__list}>
					{data.map((item, idx) => (
						<FooterItem key={idx} item={item} />
					))}
				</ul>
				<div className={styles.footer__copyright}>
					<p className={styles["footer__copyright-text"]}>© 2025 “ОИК”</p>
				</div>
			</div>
		</footer>
	);
}
