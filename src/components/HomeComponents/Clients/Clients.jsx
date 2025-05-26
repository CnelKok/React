import { useState } from "react";
import styles from "./clients.module.css";
import data from "./data";
import Card from "../../Card";
import PopUp from "../../PopUp";
import CardPopUp from "../../CardPopUp";

const Clients = () => {
	const [active, setActive] = useState(false);
	const [index, setIndex] = useState(0);

	const openPopUp = (idx) => {
		setIndex(idx);
		setActive(true);
	};
	return (
		<>
			<PopUp active={active} setActive={setActive}>
				<CardPopUp {...data[index]} />
			</PopUp>
			<div className={styles.clients}>
				{data.map((item, i) => (
					<Card onClick={() => openPopUp(i)} key={i} {...item}></Card>
				))}
			</div>
		</>
	);
};

export default Clients;
